import { Scroll } from '@react-three/drei'
import { useState } from 'react'
import './scrollMeshes.css'
import CrescentLogo from '../../models/logo/Crescent-logo'
import Bottle from '../../models/bottle/Bottle'
import PC from '../../models/bottle/PC'
import BullsEye from '../../models/bullsEye/Bullseye1'
import { useSpring, animated, config } from "@react-spring/three";
// import { useThree, useScroll } from '@react-three/fiber'

const ScrollMeshes = () => {
  const [hover, setHover] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  

  const { scale } = useSpring({
    scale: hover ? .51 : .5,
    config: config.wobbly
  });

  const { scaleTwo } = useSpring({
    scaleTwo: hoverTwo ? .51 : .5,
    config: config.wobbly
  });

  
  return (
    <>
    
    <Scroll>
    <CrescentLogo/>
    <Bottle/>
    <animated.mesh
     scale={scale}
     onClick={(e) => setHover(!hover)}
    >
    <BullsEye
    />
     </animated.mesh>
     <animated.mesh
     scale={scaleTwo}
     onClick={(e) => setHoverTwo(!hoverTwo)}
     >
    <BullsEye
     position={[-3.5, -15, .1]}/>
     </animated.mesh>
    <PC/>
    </Scroll>
    </>
  )
}

export default ScrollMeshes