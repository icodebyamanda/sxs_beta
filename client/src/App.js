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
        <h1 className="Title"> Step By Step </h1>
      </header>

    <ul>

      { moods.map((mood) => (
        
        <li key={mood.name}>

          <button className="MainButtons" name={mood.name} onClick={() => getAresponse(mood.name)}>
            {mood.name} {` `} {mood.emoji}
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

    </div>

  );

}

export default App;
