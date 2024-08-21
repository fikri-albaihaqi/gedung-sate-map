import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function createControl(camera, renderer) {
  const controls = new OrbitControls(camera.camera, renderer.domElement);
  controls.listenToKeyEvents(window); // optional

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;
  controls.enableZoom = true
  controls.enablePan = false

  controls.screenSpacePanning = false;

  controls.minDistance = 100;
  controls.maxDistance = 500;

  controls.maxPolarAngle = Math.PI / 2;

  return {
    controls
  }
}