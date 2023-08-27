import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const NPC = ({ position, movementRange }) => {
  const npcRef = useRef();
  let direction = 1; // Used to control the NPC's movement direction
  let speed = 0.02; // Adjust the speed of movement
  let originalY = position[1]; // Store the original Y position for animation

  // Define possible sizes and colors
  const sizes = [1, 1.5, 2];
  const colors = ['blue', 'red', 'green', 'yellow'];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useFrame((state, delta) => {
    // Move the NPC back and forth within the defined range
    if (npcRef.current.position.x >= movementRange[1] || npcRef.current.position.x <= movementRange[0]) {
      direction *= -1; // Reverse direction when reaching movement boundaries
    }

    // Update the NPC's position
    npcRef.current.position.x += speed * direction;

    // Add some vertical animation
    npcRef.current.position.y = originalY + Math.sin(state.clock.elapsedTime) * 0.5;
  });

  return (
    <Box ref={npcRef} args={[randomSize, 2 * randomSize, randomSize]} position={position}>
      <meshLambertMaterial color={randomColor} />
    </Box>
  );
};

export default NPC;
