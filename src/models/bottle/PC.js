import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function PC() {
  const group = useRef();
  useFrame(() => (group.current.rotation.y += -0.002));
  const { nodes } = useGLTF("../logos/PC-transformed.glb");
  return (
    <group
      scale={0.7}
      rotation={[-Math.PI / -8, 0, 0]}
      ref={group}
      dispose={null}
      position={[0, -20, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload("../logos/PC-transformed.glb");
