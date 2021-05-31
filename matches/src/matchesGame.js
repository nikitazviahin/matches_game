import React, { useState } from 'react';

const MatchesGame = (props) => {

    const [matchesLeftYours, setMatchesLeftYours] = useState(0)
    const [matchesLeftAI, setMatchesLeftAI] = useState(0)
    
    const matchesTotal = 25;
    const matchesLeft = matchesTotal - matchesLeftYours - matchesLeftAI; 

    let isGameEnded = false;
    let buttonsArray = new Array(3);

    const calculateWinner = (number, matchesPlayer) => {
      if (number === 0) {
        if (matchesPlayer % 2 === 0) {
          return 'You are winner';
        } else {
          return 'AI is winner';
        }
      } else {
        return 'Take matches';
      }
    }

    const winner = calculateWinner(matchesLeft, matchesLeftYours)
  
    if (winner === 'You are winner' || winner === 'AI is winner') {
      isGameEnded = true;
    }
  
    const takeMatches = (number) => {
      setMatchesLeftYours(matchesLeftYours => matchesLeftYours + number);
      takeMatchesAI(matchesLeft - number);
    }
  
    const takeMatchesAI = (number) => {
      for (let i = 1; i <= 3; i += 2) {
        if ((number - i) % 4 === 0 || (number - i) % 4 === 1) {
          setMatchesLeftAI(matchesLeftAI => matchesLeftAI + i);
        }
      }
    }

    if (!props.status && matchesLeft === 25) {
      takeMatchesAI(matchesLeft);
    }

    for (let i = 1; i <= 3; i++){
      let canTakeMatches = matchesLeft >= i;
      buttonsArray[i] = <div key={i} 
                            disabled={!canTakeMatches} 
                            className='ButtonPadding'>
                            <button className='ChooseButton' onClick={() => {takeMatches(i)}}>{canTakeMatches ? '✏️ '.repeat(i) : 'Not enough matches'}</button>
                        </div> 
    }

    return (
      <div className='App'>
          <div className='Title'>
            <p>Matches Game</p>
          </div>
          <div className='Subtitle'>
            <p>I found no match emoji so used pencil instead</p>
          </div>
          <div className='Matches'>{matchesLeft} ✏️</div>
          <div className='Winner'>{winner}</div>
          {isGameEnded ? <div className='ButtonPadding'><button className='ChooseButton' onClick={() => {
                                                                                                  setMatchesLeftYours(0)
                                                                                                  setMatchesLeftAI(0)
                                                                                                  }}>Play again</button></div> : 
            <div className='ButtonsPanel'>
              {buttonsArray}
            </div>
            }
          <div>Your matches {matchesLeftYours}</div>
          <div>AI's matches {matchesLeftAI}</div>
      </div>
    );
}

export default MatchesGame;
