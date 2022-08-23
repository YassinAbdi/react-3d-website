// import OrderScreen from "../orderScreen/OrderScreen";
import "./header.css";
// import { useState } from "react";

const Header = () => {
  // const [isShown, setIsShown] = useState(false);

  // const handleClick = (event) => {
  //   setIsShown((current) => !current);
  // };

  return (
    <header>
      <div className="logo">
        <span className="header-left">Effortless</span>
      </div>
      <div className="episode">
        <span className="header-right">Order Soon</span>
      </div>
    </header>
  );
};

export default Header;
