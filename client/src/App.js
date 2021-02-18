import React, { useEffect, useState }  from "react";
import './App.css';
// import blessed from './emoticons/blessed.png'; 
//import emoticons from './emoticons'; 

// console.log(blessed)

function App() {

  const [moods, setMoodState] = useState([]);
  const [responses, setResponseState] = useState("")
  // response state
  // const [sad, setSadState] = useState("");

  useEffect(() => {
    getResponses();
  }, []);

  function handleSadClick(e) {

    setSadState(e.target.value);
    console.log(e)

  }

  const getResponses = (moodref) => {
    fetch(`/responses/${moodref}`)
      .then((response) => response.json())
      .then()
    
  }

  return (
    <div className="App">
      <header>
      React! Are you working? 
      </header>

      {/* <div>
        <img src="./assets/emoticons/blessed.png" alt="blessed" />;
      </div> */}

      <div 
      name="moods"
      value={moods}
      >

        <button 
          name="sad"
          value={sad}
          onClick={handleSadClick}
        >sad</button>
        
        <button>blessed</button>

      </div>

    </div>


  );
}

export default App;
