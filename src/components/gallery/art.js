import React from 'react';
import { Box, Text, Plane, SpotLight } from '@react-three/drei';
import { TextureLoader } from 'three';
import BlockchainBladeTexture from '../../components/Assets/BlockchainBlade.png';
import SpinegrinderTexture from '../../components/Assets/Spinegrinder.png';
import ResistorRadianceTexture from '../../components/Assets/Resistor Radiance.png';

const textureLoader = new TextureLoader();

const ArtGallery = ({ position }) => {
  const gallerySize = [8, 4, 0.2];
  const artworkSize = [2, 3, 0.1];
  const artworks = [
    { position: [-2, 1.5, 0], title: 'Blockchain Blade', texture: BlockchainBladeTexture, description: 'A masterpiece of digital art.' },
    { position: [0, 1.5, 0], title: 'Spinegrinder', texture: SpinegrinderTexture, description: 'Abstract exploration of form and color.' },
    { position: [2, 1.5, 0], title: 'Resistor Radiance', texture: ResistorRadianceTexture, description: 'Energetic representation of circuits.' },
  ];

  return (
    <group position={position}>
      {artworks.map((artwork, index) => (
        <group key={index} position={artwork.position}>
          {/* Add a spotlight to illuminate the artwork */}
          <SpotLight
            position={[0, 5, 1]}
            intensity={0.8}
            penumbra={1}
            decay={2}
            distance={10}
            angle={Math.PI / 8}
            castShadow
          />
          <Box args={artworkSize}>
            <meshLambertMaterial map={textureLoader.load(artwork.texture)} />
          </Box>
          <Text
            position={[0, 2, artworkSize[2] / 2 + 0.05]}
            rotation={[0, 0, 0]}
            fontSize={0.2}
            color="white"
            backgroundColor={0x222222} // Add background color
            anchorX="center"
          >
            {artwork.title}
          </Text>
        </group>
      ))}
      <Plane
        args={[8, 4]}
        position={[0, gallerySize[1] / 2, -0.1]}
      >
        <meshBasicMaterial color={0x111111} />
      </Plane>
    </group>
  );
};

export default ArtGallery;
