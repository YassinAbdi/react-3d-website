import { Scroll } from "@react-three/drei";
import "./scrollMeshes.css";
import CrescentLogo from "../../models/logo/Crescent-logo";
import Bottle from "../../models/bottle/Bottle";
import PC from "../../models/bottle/PC";
import { Flex, Box } from "@react-three/flex";
// import BullsEye from "../../models/bullsEye/Bullseye1";
// import { useSpring, animated, config } from "@react-spring/three";
// import { useThree, useScroll } from '@react-three/fiber'

const ScrollMeshes = () => {
  return (
    <>
      <Scroll>
        <Flex justifyContent="center" alignItems="center">
          <Box centerAnchor width="auto" height="auto" flexGrow={1}>
            <CrescentLogo />
          </Box>
          <Box centerAnchor flexGrow={2}>
            <Bottle />
          </Box>
          <Box centerAnchor flexGrow={3}>
            <PC />
          </Box>
        </Flex>
      </Scroll>
    </>
  );
};

export default ScrollMeshes;
