import * as THREE from "three";
import { useEffect, useState } from "react";

export default () => {
  const [move, setMove] = useState(false);
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    let mer = new Mercury(canvas, 0);
    mer.init();
  }, [move]);
  class Mercury {
    constructor(canvas, i) {
      this.canvas = canvas;
      this.i = i;
    }
    addScene = () => {
      const canvas = document.querySelector("#planet-mercury");
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
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
      let curve = new THREE.EllipseCurve(0, 0, 120, 80, 0, 2 * Math.PI, false, 0);
      let points = curve.getPoints(9999);
      let orbit = new THREE.BufferGeometry()
        .setFromPoints(points)
        .rotateX(Math.PI / 2.3)
        .rotateY(Math.PI / 3);
      this.orbit = orbit;
    };

    moveMercury = () => {
      if (this.i >= this.orbit.attributes.position.array.length) {
        this.i = 0;
      } else {
        this.i += 21;

        let x1 = this.orbit.attributes.position.array[this.i];
        let y1 = this.orbit.attributes.position.array[this.i + 1];
        let z1 = this.orbit.attributes.position.array[this.i + 2];

        this.mercury.position.set(x1, y1, z1);

      
          if (move) {
            this.camera.position.set(x1-3, y1+3, z1-3);
            this.camera.lookAt(this.mercury.position.x-1, this.mercury.position.y+6, this.mercury.position.z);
            
          }
        
      }
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
      this.addSphere(0x444044, 75, 20);
      this.addMercury(0xfff0ff, 5, 30);
      this.addOrbit();
      this.animate();
    };
  }

  return (
    <>
      <section className="mercury-jumbotron">
        <div className="jbt-phareses">
          <h1
            onClick={() => {
              setMove(!move);
            }}
          >
            First plane[t] of your browser
          </h1>
          <h3>Simple, usefull and minimal startpage</h3>
        </div>
        <canvas id="planet-mercury"></canvas>
      </section>
      <style jsx>{`
        .mercury-jumbotron {
          margin-top: 120px;
        }
        .jbt-phareses {
          max-width: 448px;
          display: flex;
          flex-direction: column;
          color: #404044;
        }
        .jbt-phareses h1 {
          font-family: RoobertBold;
          font-size: 48px;
        }
        .jbt-phareses h3 {
          font-family: RoobertRegular;
          font-size: 24px;
        }
        canvas {
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 720px;
          display: block;
          z-index: -1;
        }
      `}</style>
    </>
  );
};
