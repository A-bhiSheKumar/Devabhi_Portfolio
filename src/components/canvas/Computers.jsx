import { Suspense , useEffect , useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';


const Computers = (ismobile) => {

  const computer = useGLTF('./lost_programmer/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight 
        position={[-20 , 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={ismobile ? 0.7 : 0.75}
        position={ismobile ? [1 , -1.75 , -1] : [1, -0.1 , -1]}
        rotation={[0.5, 0.2, 0.1]}
        
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile , setIsMobile] = useState(false);


  useEffect(() => {
    //Adding a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    //Set the intial value of the 'ismobile' state variables
    setIsMobile(mediaQuery.matches);


    //Defining a callback function to handle chnages to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change" , handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change" , handleMediaQueryChange);
    }
  }, [])
  
  return (
    <Canvas
      frameloop="demand"
      shadows
      // camera={{position: [20, 3, 5], fov:25}}
      camera={{ position: [0, 0, 15], fov:25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

    <Suspense fallback={<CanvasLoader/> }>
      <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      
      <Computers  isMobile={isMobile} />
    </Suspense>

     <Preload all />
    </Canvas>
  )
}


export default ComputersCanvas;
