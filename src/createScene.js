import * as THREE from 'three';

export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xD6D2CA);
  scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

  return {
    scene
  }
}