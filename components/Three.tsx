"use client"
import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Untitled from '../public/Cargo';



// Convert functional component to TypeScript
const Three = () => {
  return (
    <>
      <Canvas className='h-[700px] md:h-[400px] xs:h-[300px]'>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Untitled />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default Three;
