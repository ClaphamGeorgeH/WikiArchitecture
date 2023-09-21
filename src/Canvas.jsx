import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


export const Canvas = (props,{width = 500, height = 500 }) => {

const canvasRef = useRef(null);

console.log(props);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth,window.innerHeight);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const controls = new OrbitControls(camera,renderer.domElement);

renderer.domElement.addEventListener( 'resize', onWindowResize );

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix(window.innerWidth,window.innerHeight);
}

function render() {
  renderer.render( scene, camera );
}

const mouseEnterHandle = (e) => {
  document.body.style.overflow = 'hidden';
}

const mouseLeaveHandle = (e) => {
  document.body.style.overflow = 'auto';
}

useEffect(() => {
  console.log('getting into useEffect');
  const canvas = canvasRef.current;

  //orbit controls configuration...
  controls.listenToKeyEvents(renderer.domElement);
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 5;
  controls.maxDistance = 20;
  controls.maxPolarAngle = Math.PI / 2;

  //play animation
  function animate() {

    requestAnimationFrame( animate );
    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    render();
  }

  animate();
  
  canvas.appendChild(renderer.domElement);

  return () => {
    renderer.dispose();
  };
}, []);

return (
  <>
    <div
    ref={canvasRef}
    onMouseEnter={mouseEnterHandle}
    onMouseLeave={mouseLeaveHandle}
    >
    </div>
  </>
)
    
}
