import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

export const Canvas = ({width = 500, height = 500 }) => {

const canvasRef = useRef(null);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const handleZoom = (event) => {
  
  const zoomSpeed = 0.01;
  const zoomAmount = event.deltaY * zoomSpeed;
  camera.position.z += zoomAmount;
  const minZoom = 2;
  const maxZoom = 20;
  camera.position.z = Math.max(minZoom, Math.min(maxZoom, camera.position.z));
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
};

const mouseEnterHandle = (e) => {
  document.body.style.overflow = 'hidden';
}

const mouseLeaveHandle = (e) => {
  document.body.style.overflow = 'auto';
}

useEffect(() => {
  const canvas = canvasRef.current;
  
  // Set up camera
  camera.position.z = 5;

  // Set up renderer
  renderer.setSize(width,height);
  canvas.appendChild(renderer.domElement);

  // Render the scene initially
  renderer.render(scene, camera);

  return () => {
    
  };
}, []);


return (
  <>
    <div
    ref={canvasRef}
    onWheel={handleZoom}
    onMouseEnter={mouseEnterHandle}
    onMouseLeave={mouseLeaveHandle}
    >
    </div>
  </>
)
    
}
