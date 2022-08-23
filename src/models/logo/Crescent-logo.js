import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CrescentLogo() {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "../logos/crescent-logo-transformed.glb"
  );
  return (
    <group ref={group} dispose={null} scale={0.4} position={[0, -6, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[0, 4, 0]}
        scale={[4, 4, 1]}
      />
    </group>
  );
}

useGLTF.preload("../logos/crescent-logo-transformed.glb");
