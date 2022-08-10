import { Scroll } from '@react-three/drei'
import Ball from '../ball/Ball'
import Cone from '../cone/Cone'
import Torus from '../torus/Torus'
import './scrollMeshes.css'
import CrescentLogo from '../../models/logo/Crescent-logo'
import Bottle from '../../models/bottle/Bottle'
import PC from '../../models/bottle/PC'
// import { useThree, useScroll } from '@react-three/fiber'

const ScrollMeshes = () => {
  
  return (
    <>
    
    <Scroll>
    <CrescentLogo/>
    <Bottle/>
    <PC/>
    </Scroll>
    </>
  )
}

export default ScrollMeshes