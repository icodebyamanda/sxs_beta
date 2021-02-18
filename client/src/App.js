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

  function handleClick(e) {

  
    console.log(e.target.name)

    setMoodState(e.target.name);
    console.log(e)

    getResponses() 

  }



  const getResponses = () => {

    fetch(`/responses/${moods}`)
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp)
        setResponsesState(resp)})

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

    <div>

    <button name="sad" onClick={handleClick}>sad</button>

        
    <button name="fidgety" onClick={handleClick}>fidgety</button>

    <button name="blessed" onClick={handleClick}>blessed</button>

    <button name="determined" onClick={handleClick}>determined</button>

    </div>

    {/* {moods.map((mood) => ( 

      <div 
      name="moods"
      key={mood.id}

      >

      <span onClick={() => handleClick(mood.id)}>

      
      </span>
      
      </div>

    ))} */}

    {/* display response with map */}


    </div>

  );

}

export default App;
