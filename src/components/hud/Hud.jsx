import { Scroll } from '@react-three/drei'
import './hud.css'

const Hud = () => {
  return (
    <>
  <Scroll html style={{width: '100%'}}>
    <h1 id='hud-text' style={{ position: 'absolute', left: '10vw', top: '3vw' }}>Welcome to Effortless, where we belive eating should be effortless.</h1>
    <h1 id='hud-text2' style={{position: 'absolute', top: '120vh', left: '105vh'}}>Sustainable Hydroponic Farming using the Krakty method</h1>
    <h1 id='hud-text'style={{ position: 'absolute', top: '200vh', left: '10vw' }}><a href={'http://crcontrolpanel.netlify.app'}>Connect With Us</a></h1>
  </Scroll>
    </>
  )
}

export default Hud