import * as THREE from 'three';
import constant from './constant';

export function createCamera() {
  const camera = new THREE.OrthographicCamera(
    (-constant.sizes.aspect * constant.sizes.frustum) / 2,
    (constant.sizes.aspect * constant.sizes.frustum) / 2,
    constant.sizes.frustum / 2,
    -constant.sizes.frustum / 2,
    0.1,
    1000
  )
  
  camera.position.x = 1.7
  camera.position.y = 1
  camera.position.z = -2

  // camera.position.x = 0
  // camera.position.y = 1
  // camera.position.z = 0

  return {
    camera
  }
}