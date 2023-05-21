// useCallBack is a hook that allows us to store a function across component execution; tells react we want to save a 
// function and not recreate it with each execution
import React, { useState, useCallback } from 'react'; 
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutPut from './Demo/DemoOutput';


function App() {
  // start off with showing paragraph to false to keep new paragraph hidden
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING")

  // allows to toggle between showing paragraph and not showing
  // useCallback passes function as first argument to useCallback then useCallback returns that stored function and when app function reruns
  // useCallback will look for that stored function and resue that same function object
  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* click button to show paragraph */}
      {/* {showParagraph && <p>This is a new paragraph!</p>} */}
      <DemoOutPut show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
