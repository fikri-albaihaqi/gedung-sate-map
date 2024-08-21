import * as THREE from 'three';
import constant from './constant';

export function createLights() {
  // lights

  const dirLight1 = new THREE.DirectionalLight(0xd5deff, 3);
  dirLight1.position.set(3, 5, -5);
  dirLight1.castShadow = true
  dirLight1.shadow.bias = -0.0002
  dirLight1.shadow.intensity = 0

  dirLight1.shadow.mapSize.width = 2048;
  dirLight1.shadow.mapSize.height = 2048;

  dirLight1.shadow.camera.left = (-constant.sizes.aspect * constant.sizes.frustum) / 2;
  dirLight1.shadow.camera.right = (constant.sizes.aspect * constant.sizes.frustum) / 2;
  dirLight1.shadow.camera.top = constant.sizes.frustum / 2;
  dirLight1.shadow.camera.bottom = -constant.sizes.frustum / 2;
  dirLight1.shadow.camera.near = 0.1;
  dirLight1.shadow.camera.far = 1000;

  const ambientLight = new THREE.AmbientLight(0x555555);
  // ambientLight.intensity = 10

  return {
    dirLight1,
    ambientLight
  }
}