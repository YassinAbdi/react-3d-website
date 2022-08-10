
const Light = () => {
  return (
    <>
    <ambientLight args={['#fff', .5]} />
    <directionalLight args={['#fff', .2]} position={[15, 2, 11]}/>
    <directionalLight args={['#fff', .1]} position={[-7, -2, 25]}/>
    </>
  )
}

export default Light