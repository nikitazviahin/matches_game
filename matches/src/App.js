import React, { useState } from 'react';

function App() {

  const [matchesLeft, setMatchesLeft] = useState(25)
  const [matchesLeftYours, setMatchesLeftYours] = useState(0)
  const [matchesLeftAI, setMatchesLeftAI] = useState(0)

  const takeMatches = (number) => {
    setMatchesLeft(matchesLeft => matchesLeft - number)
    setMatchesLeftYours(matchesLeftYours => matchesLeftYours + number)
    takeMatchesAI(matchesLeft-number)
  }

  const takeMatchesAI = (number) => {
    console.log((number - 3) % 4);
    console.log((number - 1) % 4);
    if ((((number - 3) % 4 === 0) || ((number - 3) % 4 === 1))) {
      setMatchesLeft(matchesLeft => matchesLeft - 3)
      setMatchesLeftAI(matchesLeftAI => matchesLeftAI + 3)
    }
    if ((((number - 1) % 4 === 0) || ((number - 1) % 4 === 1))) {
      setMatchesLeft(matchesLeft => matchesLeft - 1)
      setMatchesLeftAI(matchesLeftAI => matchesLeftAI + 1)
    }
  }

  return (
    <>
      <div>GamePage</div>
      <div>matches {matchesLeft}</div>
      <button onClick={() => {takeMatches(3)}}>3 matches</button>
      <button onClick={() => {takeMatches(2)}}>2 matches</button>
      <button onClick={() => {takeMatches(1)}}>1 matches</button>
      <div>matchesyours {matchesLeftYours}</div>
      <div>matchesAI {matchesLeftAI}</div>
    </>
  );
}

export default App;
