import React from 'react';
import { Text } from '@react-three/drei';

const ThreeDText = ({ position, text }) => {
  return (
    <Text
      position={position}
      fontSize={4}                // Larger font size for impact
      color="rgb(97, 218, 251)"  // Vibrant blue color
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.3}         // Thicker outline for emphasis
      outlineColor="rgb(0, 0, 0)" // Solid black outline
      outlineOpacity={0.8}
      extrude={0.5}              // Deeper extrusion for depth
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwE44TYFv.ttf"
    >
      <meshPhongMaterial attach="material" color="rgb(97, 218, 251)" />
      
      {text}
    </Text>
  );
};

export default ThreeDText;
