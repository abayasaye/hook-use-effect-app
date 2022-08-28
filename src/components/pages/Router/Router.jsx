import "./router.css";
import React from "react";
// import App from "../../../App";
import Game from "../Game";
import Football from "../Football";
import Basketball from "../Basketball";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../page-not-found/Page-not-found";
import DevicesProvider from "../../../contexts/DeviceContext";
const c = console.log;

function Router() {

  return (
    <div className="router">
      <DevicesProvider>
        <Routes>
          <Route path="/Game" element={<Game />}></Route>
          <Route path="/Football" element={<Football />}></Route>
          <Route path="/Basketball" element={<Basketball />}></Route>
          <Route path="/Basketball" element={<Basketball />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        </DevicesProvider>
    </div>
  );
}

export default Router;







































// function Router({count}) {
//   switch (count) {
//     case 1:

//       return <Game/>;
//       case 2:

//       return <Football/>;
//       case 3:

//       return <Basketball/>;

//     default:
//       break;
//   }
//   return (
//     <div className="router">
//       <h1>ROUTER-COMPONENT</h1>
//     </div>
//   );
// };

// export default Router;
