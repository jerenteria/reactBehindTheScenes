import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutPut from './Demo/DemoOutpust';


function App() {
  // start off with showing paragraph to false to keep new paragraph hidden
  const [showParagraph, setShowParagraph] = useState(false);
  // allows to toggle between showing paragraph and not showing
  const toggleParagraphHandler = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* click button to show paragraph */}
      {/* {showParagraph && <p>This is a new paragraph!</p>} */}
      <DemoOutPut show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Button</Button>
    </div>
  );
}

export default App;
