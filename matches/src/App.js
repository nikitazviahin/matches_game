import React, { useState } from 'react';
import './App.css';
import PlayerSecond from './pages/playerSecond';
import PlayerFirst from './pages/playerFirst';

function App() {

  const [chosen, setChosen] = useState(false);

  return (
    <div className='ChooseRegime'>
      <p>Choose who will go first</p>
      <button className='ChooseButton' onClick={() => setChosen(true)}>Player first</button>
      <button className='ChooseButton' onClick={() => setChosen(false)}>Player second</button>
      {chosen ?
              <> 
                <p>Player goes first</p>
                <PlayerFirst/>
              </> : 
              <>
                <p>Player goes second</p>
                <PlayerSecond />
              </>
              }
    </div>
   );
}

export default App;
