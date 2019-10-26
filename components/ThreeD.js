import * as THREE from "three";
import { useEffect, useState } from "react";
import { TweenMax, Expo } from "gsap/all";

export default props => {
  const [cam, setCam] = useState(
    new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
  );
  let renderer, scene, mercury, orbit, frameID;
  let i = 0;
  let canvas = document.querySelector("canvas");

  const addScene = () => {
    canvas = document.querySelector("#planet-mercury");
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true
    });
    scene = new THREE.Scene();
    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  };
  const addLight = (color, ins) => {
    const ambientLight = new THREE.AmbientLight(0xf4f4f4, 1);
    let pointLight = new THREE.PointLight(color, ins);
    pointLight.position.set(50, 200, 80);
    pointLight.castShadow = true;
    scene.add(ambientLight);
    scene.add(pointLight);
  };
  const addSphere = (color, size, res) => {
    let geo = new THREE.SphereGeometry(size, res, res);
    let mat = new THREE.MeshPhysicalMaterial({
      color: color,
      roughness: 0.8,
      metalness: 0.2
    });
    let mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    scene.add(mesh);
  };

  const addMercury = (color, size, res) => {
    let geo = new THREE.SphereGeometry(size, res, res);
    let mat = new THREE.MeshLambertMaterial({
      color: color
    });
    mercury = new THREE.Mesh(geo, mat);
    mercury.castShadow = true;
    scene.add(mercury);
  };

  const addOrbit = () => {
    let curve = new THREE.EllipseCurve(
      0,
      0,
      150,
      100,
      0,
      2 * Math.PI,
      false,
      0
    );
    let points = curve.getPoints(600);
    orbit = new THREE.Geometry()
      .setFromPoints(points)
      .rotateX(Math.PI / 2.3)
      .rotateY(Math.PI / 3);
  };

  const moveMercury = () => {
    let x1, y1, z1;
    if (i >= orbit.vertices.length) {
      i = 0;
    } else {
      i++;
      x1 = orbit.vertices[i - 1].x;
      y1 = orbit.vertices[i - 1].y;
      z1 = orbit.vertices[i - 1].z;
    }
    mercury.position.set(y1, x1, z1);
  };
  const renderScene = () => {
    renderer.render(scene, cam);
  };

  const resizeRendererToDisplaySize = () => {
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    renderer.setSize(width, height);
    cam.aspect = width / height;
    cam.updateProjectionMatrix();
  };

  const animateCamera = bool => {
    if (bool) {
      TweenMax.to(cam.position, 4.2, {
        x: 0,
        y: 78,
        z: 28,
        ease: Expo.easeInOut
      });
      TweenMax.to(cam.rotation, 4.2, {
        z: Math.PI,
        ease: Expo.easeInOut
      });
    } else {
      TweenMax.to(cam.position, 4.2, {
        x: -118,
        y: 0,
        z: 388,
        ease: Expo.easeInOut
      });
      TweenMax.to(cam.rotation, 4.2, {
        z: 0,
        ease: Expo.easeInOut
      });
    }
  };

  const animate = () => {
    moveMercury();
    renderScene();
    frameID = window.requestAnimationFrame(animate);
    if (resizeRendererToDisplaySize(renderer)) {
      cam.aspect = canvas.clientWidth / canvas.clientHeight;
      cam.updateProjectionMatrix();
    }
  };
  const start = () => {
    if (!frameID) {
      frameID = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    addScene();
    cam.position.set(-118, 0, 388);
    addLight(0xfffafa, 2);
    addSphere(0x444044, 75, 30);
    addMercury(0xfff0ff, 5, 10);
    addOrbit();
    start();
  }, []);

  useEffect(() => {
    animateCamera(props.move);
  }, [props.move]);

  return (
    <>
      <canvas id="planet-mercury"></canvas>
      <style jsx>{`
        canvas {
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: block;
          z-index: -1;
        }
      `}</style>
    </>
  );
};
