import Light from "../light/Light.jsx";
import Hud from "../../components/hud/Hud.jsx";
import ScrollMeshes from "../../components/scrollMeshes/ScrollMeshes.jsx";
import { Float, ScrollControls, Sparkles } from "@react-three/drei";

export default function Scene() {
  return (
    <>
      {/* <Stars radius={35} depth={20} count={450} factor={4} saturation={1} fade speed={1}/> */}
      <Sparkles
        count={100}
        opacity={1}
        size={4}
        speed={0.4}
        scale={12}
        color={"#e0ecde"}
      />
      <ScrollControls pages={4} distance={1} damping={3}>
        <Float
          speed={1}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0, 0.5]}
        >
          <ScrollMeshes />
        </Float>
        <Hud />
      </ScrollControls>

      <Light />
    </>
  );
}
