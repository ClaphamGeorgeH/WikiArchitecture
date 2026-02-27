import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// import the model URL so Vite handles it correctly
import glbModelUrl from '../assets/compositions/Villa_Savoye/scene-v1.glb?url';
import gltfModelUrl from '../assets/compositions/Villa_Savoye/scene.gltf?url';

export const Canvas = (props) => {
  const canvasRef = useRef(null);

  const mouseEnterHandle = (e) => {
    document.body.style.overflow = 'hidden';
  };

  const mouseLeaveHandle = (e) => {
    document.body.style.overflow = 'auto';
  };

  const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

  const loader = new GLTFLoader();
    loader.load(
      //gltfModelUrl,
      glbModelUrl,
      //'../assets/compositions/Villa_Savoye/scene-v1.glb',
      (gltf) => {
        console.log('Model loaded:', gltf);
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0);
        scene.add(model);
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        camera.position.sub(center);
        controls.target.copy(center);
        controls.update();
      },
      (progress) => {
        console.log(`Loading progress: ${(progress.loaded / progress.total) * 100}%`);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );
  

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    

    // lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.maxPolarAngle = Math.PI / 2;

    const handleResize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

