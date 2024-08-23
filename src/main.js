import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { createScene } from './createScene';
import { createCamera } from './createCamera';
import { createControl } from './createControl';
import { createLights } from './createLights';
import constant from './constant';
import { createInterests } from './interests';

const scene = createScene()
const world = document.getElementById('render-target')

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(constant.sizes.pixelRatio);
renderer.setSize(constant.sizes.width, constant.sizes.height);
// renderer.toneMapping = THREE.ACESFilmicToneMapping
// renderer.toneMappingExposure = 1
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.VSMShadowMap

renderer.setAnimationLoop(animate);
world.appendChild(renderer.domElement)

const camera = createCamera()
const controls = createControl(camera, renderer)
const lights = createLights()

// var shadowHelper = new THREE.CameraHelper( lights.dirLight1.shadow.camera );
// scene.scene.add( shadowHelper );

scene.scene.add(lights.dirLight1);
scene.scene.add(lights.ambientLight);

const loader = new GLTFLoader();

loader.load('/models/gedung-sate-v1.glb', function (gltf) {
  const model = gltf.scene

  model.traverse((child) => {
    // console.log(child)
    // child.castShadow = true
    // child.receiveShadow = true
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
    }
  })

  scene.scene.add(model);

  document.getElementById("preloader").style.display = 'none'

}, undefined, function (error) {

  console.error(error);

});

window.addEventListener('resize', onWindowResize);

const interests = createInterests()

function animate() {
  controls.controls.update();
  interests.update(camera.camera)
  renderer.setViewport(0, 0, constant.sizes.width, constant.sizes.height)
  renderer.render(scene.scene, camera.camera);
}

function onWindowResize() {

  camera.camera.aspect = constant.sizes.aspect;
  camera.camera.updateProjectionMatrix();

  renderer.setSize(constant.sizes.width, constant.sizes.height);
}