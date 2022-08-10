

export default function Ball(position) {
  return (
    <mesh receiveShadow castShadow position={[0, -1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="yellow"  />
    </mesh>
  )
}