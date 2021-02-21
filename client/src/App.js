import React, { useEffect, useState }  from "react";
import './App.css';


function App() {

  const [moods, setMoods] = useState([
    {name:"Sad", emoji:"😕"}, 
    {name:"Blessed", emoji:"🤗"}, 
    {name:"Determined", emoji:"😏"}, 
    {name:"Fidgety", emoji:"😣"}]); // Take all the moods
  const [pick, setPick] = useState(null) // Match to the correct one


  const getAresponse = (mood) => {

    fetch(`/responses/${mood}`)
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp)
        setPick(resp)})

      .catch((error) => {
        return error
      });
    };
    
  

  return (
    

    <div className="App">

        <header className="header">
          <div className="overlay">
            <h1> Step By Step </h1>

          </div>
          
        </header>
      
      <body>

        <div className="MoodQuestion">
          How do you feel today?
        </div>

      <ul>

        { moods.map((mood) => (
          
          <li key={mood.name}>

            <button className="MainButtons" name={mood.name} onClick={() => getAresponse(mood.name)}>
              <span id="MoodName"> {mood.name} </span>  <br></br> <span id="MoodEmoji"> {mood.emoji}</span>
            </button> 

          </li>

        ))}
      
      </ul>

        { pick &&  (

          <div className="PickUrl">

            <div className="PickIntroText">Your pick for today:</div>

              <a href={pick.url} target="_blank" > Good vibes only... </a>

          </div>

        )}

      <footer>
        <div>
          User View
        </div>
        <div>
          Admin View
        </div>
      </footer>

      </body>

      

    </div>

  );

}

export default App;