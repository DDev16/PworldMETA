import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

// Import the 'Text' component from @react-three/drei
import { Text } from '@react-three/drei';

// Use the 'extend' function from @react-three/fiber
import { extend } from '@react-three/fiber';

// Extend the 'Text' component
extend({ Text });

const Minigame = ({ position }) => {
  const [score, setScore] = useState(0);

  // Function to handle interaction with the minigame
  const handleInteraction = () => {
    setScore(score + 1);
  };

  // Use useFrame to update the game state/render loop
  useFrame(() => {
    // You can add any game logic here that needs to be updated every frame
  });

  return (
    <group position={position}>
      {/* Display the minigame element */}
      <Box args={[5, 1, 10]} onClick={handleInteraction}>
        <meshLambertMaterial color={'blue'} />
      </Box>

      {/* Display the player's score */}
      <Text position={[0, 1.5, 0]} color="white" fontSize={0.2}>
        Score: {score}
      </Text>
    </group>
  );
};

export default Minigame;
