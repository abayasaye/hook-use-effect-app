import "./router.css";
import React from "react";
import App from "../../../App";
import Game from "../Game/Game";
import Football from "../Football/Football";
import Basketball from "../Basketball/Basketball";

function Router({count}) {
  switch (count) {
    case 1:
      
      return <Game/>;
      case 2:
      
      return <Football/>;
      case 3:
      
      return <Basketball/>;
  
    default:
      break;
  }
  return (
    <div className="router">
      <h1>ROUTER-COMPONENT</h1>
    </div>
  );
};

export default Router;
