import React, {useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta
  })
  return (
    <mesh {...props}  ref = {mesh} >
      <boxGeometry />
      
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}



export default function App() {

  
  return (
    <Canvas>
      {/* <ambientLight intensity={0.5} /> */}
      <pointLight position={[6,4,10]} intensity={150} color="#fff" />
      {/* <directionalLight intensity={1} position={[10, 10, 20]} color="white" /> */}
      <mesh>
        <Box position={[0, 2, 0]} />
        <Box position={[0, 0.1, 0]} />
        {/* <sphereGeometry args={[1, 32, 32]} /> */}
        <meshStandardMaterial color={'orange'} />
      </mesh>
      <mesh scale={0.05} >
        {/* <torusKnotGeometry scale={1} args={[7, 0.99, 300, 20, 8, 18]} />
        <meshStandardMaterial color={'green'} /> */}
      </mesh>
    </Canvas>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
