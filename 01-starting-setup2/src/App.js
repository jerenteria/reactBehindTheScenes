// useCallBack is a hook that allows us to store a function across component execution; tells react we want to save a 
// function and not recreate it with each execution
import React, { useState, useCallback } from 'react'; 
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutPut from './Demo/DemoOutput';


function App() {
  // start off with showing paragraph to false to keep new paragraph hidden
  const [showParagraph, setShowParagraph] = useState(false);
  // allows to toggle between showing paragraph and not showing
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* click button to show paragraph */}
      {/* {showParagraph && <p>This is a new paragraph!</p>} */}
      <DemoOutPut show={false}/>
      <Button onClick={toggleParagraphHandler}>Button</Button>
    </div>
  );
}

export default App;
