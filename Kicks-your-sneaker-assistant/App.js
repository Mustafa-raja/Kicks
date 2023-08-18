import React from 'react';
import { Canvas } from '@react-three/fiber';
import { SphereGeometry, MeshStandardMaterial } from 'three';

function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}



export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[0, 10, -5]} intensity={1} color="#fff" /> */}
      <directionalLight intensity={2} position={[10, 10, 20]} color="white" />
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <Box position={[0, 2, 0]} />
        <Box position={[1, 1.2, 0]} />
        {/* <sphereGeometry args={[1, 32, 32]} /> */}
        <meshStandardMaterial color={'orange'} />
      </mesh>
      <mesh scale={0.05} >
        <torusKnotGeometry scale={1} args={[7, 0.99, 300, 20, 8, 18]} />
        <meshStandardMaterial color={'green'} />
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
