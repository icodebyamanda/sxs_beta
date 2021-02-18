import React, { useEffect, useState }  from "react";
import './App.css';
// import blessed from './emoticons/blessed.png'; 
//import emoticons from './emoticons'; 

// console.log(blessed)

function App() {

  const [moods, setMoodState] = useState([]); // Take all the moods
  const [responses, setResponsesState] = useState(null) // Match to the correct one


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
      .then((responses) => setResponsesState(responses))
      .catch((error) => {
        return error
      });
    };
    
  

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
      {moods.map(mood => )}
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
