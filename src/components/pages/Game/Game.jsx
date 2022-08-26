import "./game.css";
import { useEffect ,useState,useContext} from "react";
import { myContext } from "../../../contexts/DeviceContext";

const c = console.log;
const date = new Date();
function Game() {
  const newText = useContext(myContext);
c(newText)
  const [level, setLevel] = useState(0);

  const [gameTime, setGameTime] = useState({});

  useEffect(() => {
    // alert("Welcome To The Game")
  }, []);

  useEffect(() => {
    // c("Start The Game")
  }, [level]);

  useEffect(() => {
    setGameTime(new Date());
  }, []);
  useEffect(() => {
    // alert("the game is over")
  }, [gameTime]);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const changeGameTime = () => {
    setGameTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  };
  return (
    <div className="game">
      <h1>GAME-COMPONENT</h1>
      <h1>{level}</h1>
      <button onClick={levelUp}>LEVEL-UP</button>
      <button onClick={changeGameTime}>change-time</button>
      <h1>{}</h1>

    </div>
  );
}

export default Game;
