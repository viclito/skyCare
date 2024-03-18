// "use client"
// import React from 'react';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Environment, OrbitControls } from '@react-three/drei';
// import Untitled from '../public/Cargo';



// // Convert functional component to TypeScript
// const Three = () => {
//   return (
//     <>
//       <Canvas className='h-[700px] md:h-[400px] xs:h-[300px]'>
//         <ambientLight intensity={1.5} />
//         <OrbitControls enableZoom={false}/>
//         <Suspense fallback={null}>
//           <Untitled />
//         </Suspense>
//         <Environment preset="sunset" />
//       </Canvas>
//     </>
//   );
// };

// export default Three;
import React from 'react';
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

// Convert functional component to TypeScript
const Cargo = () => {
  const gltf = useLoader(GLTFLoader, '/Cargo.gltf');

  return <primitive object={gltf.scene} />;
};

const Three = () => {
  return (
    <>
      <Canvas className='h-[700px] md:h-[400px] xs:h-[300px]'>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Cargo />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default Three;
