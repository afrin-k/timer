import React from 'react';
import './App.css';
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <Timer duration={21 * 60 * 60 * 1000}/>
    </div>
  );
}

export default App;
