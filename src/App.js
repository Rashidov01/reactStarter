import React, { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState("");
  const b = '';
  const inputChanger = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  }
  return (
    <>
      <h1 value={b}>Hello world { userInput }</h1>
      <textarea value={userInput} onChange={inputChanger} cols="30" rows="10" placeholder="write smth here"></textarea>
      <h1></h1>
      <button onClick={() => setUserInput('')}>clear</button>
    </>
  );
}

export default App;
