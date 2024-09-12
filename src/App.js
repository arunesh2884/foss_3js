// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Model';
import { Color } from 'three';

const App = () => {
  return (
    <div className="bg" style={{ height: '100vh' }}>
      <Canvas>
        {/* Add lighting to the scene */}
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={1} />

        {/* Render the 3D Model */}
        <Model />

        {/* Add orbit controls to navigate around the model */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
