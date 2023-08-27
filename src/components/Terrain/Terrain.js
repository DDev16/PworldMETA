import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import SimplexNoise from 'noisejs';

const TerrainGenerator = () => {
  const terrainRef = useRef();

  useEffect(() => {
    const canvas = terrainRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    camera.position.z = 5;

    const geometry = new THREE.PlaneGeometry(10, 10, 100, 100); // Adjust size and segments as needed
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const noise = new SimplexNoise();
    for (let i = 0; i < geometry.vertices.length; i++) {
      const vertex = geometry.vertices[i];
      vertex.z = noise.noise2D(vertex.x, vertex.y) * 2; // Adjust the multiplier as needed
    }

    const animate = () => {
      requestAnimationFrame(animate);

      // Update code here if needed

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={terrainRef} />;
};

export default TerrainGenerator;
