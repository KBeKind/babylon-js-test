import * as BABYLON from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas);

const createScene = function () {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultLight();

  // const camera = new BABYLON.UniversalCamera(
  //   "camera",
  //   new BABYLON.Vector3(0, 0, 0),
  //   scene
  // );

  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    0,
    0,
    10,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );

  camera.attachControl(true);

  camera.setPosition(new BABYLON.Vector3(0, 0, -20));
  camera.lowerBetaLimit = Math.PI / 4;
  camera.upperBetaLimit = Math.PI / 2;

  //distance close camera can get to its starting point
  camera.lowerRadiusLimit = 20;

  //distance away camera can get from its starting point
  camera.upperRadiusLimit = 50;

  //camera.inputs.addMouseWheel;
  //scene.createDefaultCameraOrLight(true, false, true);

  //CREATEBOX class
  //   CreateBox(name: string, options?: {
  //     size?: number;
  //     width?: number;
  //     height?: number;
  //     depth?: number;
  //     faceUV?: Vector4[];
  //     faceColors?: Color4[];
  //     sideOrientation?: number;
  //     frontUVs?: Vector4;
  //     backUVs?: Vector4;
  //     wrap?: boolean;
  //     topBaseAt?: number;
  //     bottomBaseAt?: number;
  //     updatable?: boolean;
  // }, scene?: Nullable<Scene>): Mesh;

  // const box = new BABYLON.MeshBuilder.CreateBox("boxname", {
  //   width: 1,
  //   height: 0.1,
  //   depth: 1,
  //   faceColors: [
  //     new BABYLON.Color4(1, 1, 0, 0.1),
  //     new BABYLON.Color4(1, 1, 0, 0.1),
  //     new BABYLON.Color4(1, 1, 0, 0.1),
  //     new BABYLON.Color4(1, 1, 0, 0.1),
  //     new BABYLON.Color4(1, 1, 0, 0.1),
  //     new BABYLON.Color4(1, 1, 0, 0.1),
  //   ],
  // });

  // CREATESPHERE CLASS
  //   CreateSphere(name: string, options?: {
  //     segments?: number;
  //     diameter?: number;
  //     diameterX?: number;
  //     diameterY?: number;
  //     diameterZ?: number;
  //     arc?: number;
  //     slice?: number;
  //     sideOrientation?: number;
  //     frontUVs?: Vector4;
  //     backUVs?: Vector4;
  //     updatable?: boolean;
  // }, scene?: Nullable<Scene>): Mesh;

  const sphere = new BABYLON.MeshBuilder.CreateSphere("nameofsphere", {
    segments: 30,
    diameter: 0.99,
  });
  return scene;
};

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
