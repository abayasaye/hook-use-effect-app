import logo from './logo.svg';
import './App.css';
import Game from './components/pages/Game/Game';
import Football from './components/pages/Football/Football';
import Basketball from './components/pages/Basketball/Basketball';
import { useState } from 'react';
import Router from './components/pages/Router/Router';
import Desk from './components/pages/Desk';
const changeArray = [1,2,3]
const App = ()=>{
  const [change,setChange]=useState(1)
  const [pageSwap,setPageSwap]=useState("Game")

const PagesChanger = ()=>{
  switch (pageSwap) {
    case "Game":
      
    return <Game/>;
    case "Football":
      
    return <Football/>;
    case "Basketball":
      
    return <Basketball/>;
  
    default:
      break;
  }
}

  const SwitchPages = ()=>{
      switch (change) {
        case 1:
          return <Game/>;
        case 2:
        return <Football/>;
        case 3:
          return <Basketball/>;
        default:
          break;
      }
  }
return(
  <div>
    <h1>COMPONENTS</h1>
    <h1>{change}</h1>
    <button onClick={()=>setChange(1)}>CLICK-TO-1</button>
    <button onClick={()=>setChange(2)}>CLICK-TO-2</button>
    <button onClick={()=>setChange(3)}>CLICK-TO-3</button><br/>
    <SwitchPages/>
  <hr/>
    <button onClick={()=>setPageSwap("Game")} >CHANGE-TO-GAME</button>
    <button onClick={()=>setPageSwap("Football")} >CHANGE-TO-FOOTBALL</button>
    <button onClick={()=>setPageSwap("Basketball")} >CHANGE-TO-BASKETBALL</button>
    {/* <button onClick={changeUp}>CHANGE-NUMBER</button> */}
    <PagesChanger/>
    <hr/>
    <Router count={change}/>
    {
      changeArray.map((i) => <button onClick={()=>setChange(i)}>{i}</button>
)
    }
    <hr/>
<Desk number={1}/>
  </div>
)
}
export default App

















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
