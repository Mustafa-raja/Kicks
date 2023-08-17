import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Canvas } from '@react-three/fiber';
export default function App() {
  return (
    <Canvas>
        <pointLight position={[0, 0, 0]} intensity={1} color={0xffffff} />

      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.7, 0.7]} />
        <meshBasicMaterial color={0x00ff00} />
      </mesh>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
