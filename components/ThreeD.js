import * as THREE from "three";
import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";

export default props => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    let mer = new Mercury(canvas, 0);
    mer.init();
    if (props.move) {
      mer.animateCamera();
    }
    if (!props.move) {
      mer.reversed();
    }
  }, [props.move]);
  class Mercury {
    constructor(canvas, i) {
      this.canvas = canvas;
      this.i = i;
    }
    addScene = () => {
      const canvas = document.querySelector("#planet-mercury");
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
      });
      const scene = new THREE.Scene();
      this.scene = scene;
      this.renderer = renderer;
    };
    addCamera = () => {
      let camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(-118, 0, 388);
      this.camera = camera;
    };
    addLight = (color, ins) => {
      const ambientLight = new THREE.AmbientLight(0xf4f4f4, 1);
      let pointLight = new THREE.PointLight(color, ins);
      pointLight.position.set(-10, 150, 50);
      this.scene.add(ambientLight);
      this.scene.add(pointLight);
    };
    addSphere = (color, size, res) => {
      let geo = new THREE.SphereGeometry(size, res, res);
      let mat = new THREE.MeshLambertMaterial({
        color: color
      });
      let mesh = new THREE.Mesh(geo, mat);
      this.scene.add(mesh);
    };

    addMercury = (color, size, res) => {
      let geo = new THREE.SphereGeometry(size, res, res);
      let mat = new THREE.MeshLambertMaterial({
        color: color
      });
      let mercury = new THREE.Mesh(geo, mat);
      this.mercury = mercury;
      this.scene.add(mercury);
    };

    addOrbit = () => {
      let curve = new THREE.EllipseCurve(
        0,
        0,
        120,
        80,
        0,
        2 * Math.PI,
        false,
        0
      );
      let points = curve.getPoints(600);
      let orbit = new THREE.Geometry()
        .setFromPoints(points)
        .rotateX(Math.PI / 2.3)
        .rotateY(Math.PI / 3);
      this.orbit = orbit;
    };

    moveMercury = () => {
      let x1, y1, z1;
      if (this.i >= this.orbit.vertices.length) {
        this.i = 0;
      } else {
        this.i++;
        x1 = this.orbit.vertices[this.i - 1].x;
        y1 = this.orbit.vertices[this.i - 1].y;
        z1 = this.orbit.vertices[this.i - 1].z;
      }
      this.mercury.position.set(y1, x1, z1);
    };

    animateCamera = () => {
      anime({
        targets: this.camera.position,
        x: [{ value: 0 }],
        y: [{ value: 78 }],
        z: [{ value: 28 }],
        duration: 6800,
        easing: "easeInOutExpo"
      });
      anime({
        targets: this.camera.rotation,
        z: [{ value: Math.PI }],
        duration: 6000,
        delay: 800,
        easing: "easeInOutExpo"
      });
    };

    resizeRendererToDisplaySize = r => {
      const width = this.canvas.clientWidth;
      const height = this.canvas.clientHeight;
      const needResize =
        this.canvas.width !== width || this.canvas.height !== height;
      if (needResize) {
        r.setSize(width, height, false);
      }
      return needResize;
    };

    animate = () => {
      this.moveMercury();
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      if (this.resizeRendererToDisplaySize(this.renderer)) {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
        this.camera.updateProjectionMatrix();
      }
    };

    init = () => {
      this.addScene();
      this.addCamera();
      this.addLight(0xfffafa, 1);
      this.addSphere(0x444044, 75, 50);
      this.addMercury(0xfff0ff, 5, 30);
      this.addOrbit();
      this.animate();
    };
    reversed = () => {
      this.init();
      anime({
        targets: this.camera.position,
        x: [{ value: 0 }],
        y: [{ value: 78 }],
        z: [{ value: 28 }],
        direction: "reverse",
        duration: 6800,
        easing: "easeInOutExpo"
      });
      anime({
        targets: this.camera.rotation,
        z: [{ value: Math.PI }],
        duration: 6000,
        direction: "reverse",
        delay: 800,
        easing: "easeInOutExpo"
      });
    };
  }

  return (
    <>
      <canvas onClick={() => setMove(!move)} id="planet-mercury"></canvas>
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
