import React from 'react';
import { Suspense } from 'react';
//All the 3d part is coming  from canvas right! and that canvas is coming from react-fiber..cool
import { Canvas } from '@react-three/fiber';

import { OrbitControls, Preload , Tube, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {

  //importing 3d model
  const earth = useGLTF('./planet/scene.gltf')


  return (
    <primitive 
      object={earth.scene}
      //making earth bigger 
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}


const EarthCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={ {
        //fov makes it much larger 
        fov:45,
        near: 0.1,
        far: 200,
        position: [-4 ,3 , 6]
       } }
    > 
      {/* it ensures, while our model is loading we have something to show  */}
      <Suspense
        fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>

    </Canvas>
  )
}
export default EarthCanvas;