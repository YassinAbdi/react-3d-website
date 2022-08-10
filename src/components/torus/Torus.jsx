


const Torus = () => {
  return (
    <mesh position={[1, -15.5, 0]}>
        <torusGeometry/>
        <meshStandardMaterial color='green'/>
    </mesh>
  )
}

export default Torus