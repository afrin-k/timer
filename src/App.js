import React from 'react';
import './App.css';
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <Timer duration={20 * 1000}/>
    </div>
  );
}

export default App;
