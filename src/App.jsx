import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import Scene from "./environment/scene/Scene";
import "./app.css";
import Header from "./components/header/Header";
// import OrderScreen from "./components/orderScreen/OrderScreen";

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
      {/* <OrderScreen /> */}
    </>
  );
}
