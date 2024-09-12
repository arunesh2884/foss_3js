// src/Model.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  // Load the 3D model
  const { scene } = useGLTF('/models/911.glb');

  // Return the loaded scene as a Three.js mesh component
  return <primitive object={scene} />;
};

export default Model;
