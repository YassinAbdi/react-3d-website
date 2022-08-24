import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import Scene from "./environment/scene/Scene";
import "./App.css";

import Header from "./components/header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Canvas id="three-canvas-container">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
