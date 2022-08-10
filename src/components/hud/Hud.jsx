import { Scroll } from '@react-three/drei'
import './hud.css'

const Hud = () => {
  return (
    <>
  <Scroll html style={{width: '100%'}}>
    <h1 id='hud-text' style={{ position: 'absolute', left: '10vw', top: '3vw' }}>Welcome to Crescent Robotics</h1>
    <h1 id='hud-text' style={{position: 'absolute', top: '100vh', left: '120vh'}}>Sustainable Hydroponic Farming</h1>
    <h1 id='hud-text'style={{ position: 'absolute', top: '200vh', left: '10vw' }}><a href={'http://crcontrolpanel.netlify.app'}>Control Panel</a></h1>
  </Scroll>
    </>
  )
}

export default Hud