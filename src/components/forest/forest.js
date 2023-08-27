import React from 'react';
import { Cylinder } from '@react-three/drei';

const Forest = () => {
  return (
    <>
      <Cylinder args={[5, 5, 30]} position={[-50, 15, -20]}>
        <meshStandardMaterial attach="material" color="#2ecc71" roughness={1} />
      </Cylinder>
      <Cylinder args={[5, 5, 30]} position={[50, 15, -20]}>
        <meshStandardMaterial attach="material" color="#2ecc71" roughness={1} />
      </Cylinder>
    </>
  );
};

export default Forest;
