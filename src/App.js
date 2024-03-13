import React,{useState} from 'react';
import './App.css';
import Timer from "./Timer";

const App = () =>{
  const [hrs, setHours] = useState();
  const [mins, setMinutes ] = useState();
  const [secs, setSeconds] = useState();
  const [time,setTime] = useState();
  const [clicked, setClicked] = useState(false);
  
  function handleClick(event) {
    setTime((hrs*3600000)+(mins*60000)+(secs*1000));
    setClicked(true);
    event.preventDefault();
  }

  return(
    <div>
          <input 
            placeholder="hours..." 
            value={hrs}
            onChange={(e) => setHours(e.target.value)}    
          />
          <input 
            placeholder="minutes..." 
            value={mins}
            onChange={(e) => setMinutes(e.target.value)}    
          />
          <input 
            placeholder="seconds..." 
            value={secs}
            onChange={(e) => setSeconds(e.target.value)}    
          />
          <button type='submit' onClick={handleClick}>submit</button>
          {clicked && <Timer duration={time}/>}
  </div>
  );
}

export default App;
