import React, { useState } from 'react';
import { a } from '@react-spring/three';
import { Box } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE here

export const Portal = ({ position, playerPosition, onTeleport }) => {
  const [isTeleporting, setIsTeleporting] = useState(false);

  const handleIntersection = () => {
    if (!isTeleporting) {
      console.log('Player Position:', playerPosition);
      console.log('Portal Position:', position);

      // Construct the vectors using THREE.Vector3
      const playerPos = new THREE.Vector3(playerPosition.x, playerPosition.y, playerPosition.z);
      const portalPos = new THREE.Vector3(position[0], position[1], position[2]);

      const distance = playerPos.distanceTo(portalPos);
      console.log('Distance to portal:', distance);

      if (distance < 1) {
        setIsTeleporting(true);
        console.log('Teleporting player...');
        onTeleport();
      }
    }
  };

  return (
    <a.mesh onClick={handleIntersection} position={position}>
      <Box>
        <meshLambertMaterial color="blue" transparent opacity={0.5} />
      </Box>
    </a.mesh>
  );
};
