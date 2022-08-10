

const Cone = () => {
  return (
    <mesh position={[-2, -7.5, 0]}>
        <coneGeometry />
        <meshStandardMaterial color="blue"/>
    </mesh>
  )
}

export default Cone