import React, { useState } from 'react';
import './App.css';
import PlayerFirst from './pages/playerFirst';

function App() {

  const [chosen, setChosen] = useState(true);
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <div className='ChooseRegime'>
      {!gameStarted ? 
      <>
        <p>Choose who will go first</p>
        <div className='ButtonsPanel'>
          <div className='ButtonPadding'><button className='ChooseButton' onClick={() => {setChosen(true)
                                                                                          setGameStarted(true)}}>Player goes first</button></div>
          <div className='ButtonPadding'><button className='ChooseButton' onClick={() => {setChosen(false)
                                                                                          setGameStarted(true)
                                                                                          }}>Player goes second</button></div>
        </div>
      </> : ''}
      {chosen ? <p>Player goes first</p> : <p>Player goes second</p>}
      {gameStarted ? <PlayerFirst status={chosen}/> : <div><p>Choose the regime to start the game</p></div>}
  </div>
   );
}

export default App;
