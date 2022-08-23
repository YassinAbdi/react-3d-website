import { Scroll } from "@react-three/drei";
import { useState } from "react";
import OrderScreen from "../orderScreen/OrderScreen";
import "./hud.css";

const Hud = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <Scroll html style={{ width: "100%" }}>
        <h1
          id="hud-text"
          style={{ position: "absolute", left: "10vw", top: "3vw" }}
        >
          Eating Should Be <span id="color-tag">Effortless.</span>
        </h1>
        <h1
          id="hud-text1"
          style={{
            position: "absolute",
            left: "10vw",
            top: "140vh",
          }}
        >
          At <span id="color-tag">Effortless</span> farms we grow Sustainable
          produce with passive Hydroponics for communities in food deserts.
        </h1>
        <h1
          onClick={handleClick}
          id="hud-text2"
          style={{ position: "absolute", left: "10vw", top: "260vh" }}
        >
          Contact Us About An Order
        </h1>
        {isShown && <OrderScreen />}
        <h1
          id="hud-text3"
          style={{ position: "absolute", left: "10vw", top: "350vh" }}
        >
          More Coming Soon...
        </h1>
      </Scroll>
    </>
  );
};

export default Hud;
