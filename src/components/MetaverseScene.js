import React, { useState, startTransition, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Correct import for GLTFLoader
import { Box, OrbitControls } from '@react-three/drei';
import { Player } from '../components/player.js';
import SkyBox from '../components/SkyBox/SkyBox.js';
import Sky1 from '../components/SkyBox/stars.jpg';
import * as THREE from 'three';
import ThreeDText from '../components/3DText/ThreeDText.js';
import ArtGallery from './gallery/art.js';

const MetaverseScene = () => {
  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const [playerPosition, setPlayerPosition] = useState(new THREE.Vector3(5, 0, 0));
  const [mountainModel, setMountainModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await new GLTFLoader().loadAsync('/mountain.glb');
      setMountainModel(loadedModel.scene);
    };

    loadModel();
  }, []);

  const handleOrbitToggle = () => {
    startTransition(() => {
      setOrbitEnabled(!orbitEnabled);
    });
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      <Canvas style={{ width: '100%', height: '100%' }} shadows>
        <directionalLight intensity={2} position={[10, 10, 10]} castShadow />
        <directionalLight intensity={5} position={[150, 10, 150]}  />
        <ambientLight intensity={0.5} />
        <ArtGallery />

        <group>
  <SkyBox textureUrl={Sky1} />
  <Box args={[50, 5, 2]} position={[2, 15, 0]}>
    <meshLambertMaterial color={'orange'} />
  </Box>
  <ThreeDText position={[2, 15, 2]} text="Welcome to Punk World" />
  {mountainModel && (  // Conditionally render the <primitive> component when mountainModel is not null
    <primitive object={mountainModel} position={[0, 13, 0]} rotation={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
  )}

  <Player
    position={playerPosition}
    scale={[1, 1, 1]}
    firstPerson={false}
    setOrbitEnabled={setOrbitEnabled}
  />
  <OrbitControls
    enablePan={true}
    enableZoom={true}
    enabled={orbitEnabled}
    onToggle={handleOrbitToggle}
  />
</group>

      </Canvas>
    </div>
  );
};

export default MetaverseScene;