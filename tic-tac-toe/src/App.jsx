import { useState } from 'react';
import Info from "./Info"
import Board from './Board';
// import logo from './logo.svg'
import './css/App.css';

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");

  const resetBoard = () => {
    setReset(true);
  }

  return (
    <div className="App">
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
        <div className='winner-text'>{winner}</div>
        <button onClick={() => resetBoard()}>
          RESET
        </button>
      </div>
      <Board reset = {reset} setReset = {setReset} winner = {winner} setWinner = {setWinner}/>
      <Info/>
    </div>
  );
}

export default App;
