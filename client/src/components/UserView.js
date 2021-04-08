import React, { useEffect, useState } from "react";

export default function UserView() {

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
    <div>

      <header>
        <div>
          <h1> Step By Step </h1>
        </div>          
      </header>
      
      <body>

        <div>
        How do you feel today?
        </div>

      <ul>
      { moods.map((mood) => (          
          <li key={mood.name}>
            <button name={mood.name} onClick={() => getAresponse(mood.name)}>
              <span id="MoodName"> {mood.name} </span>  <br></br> <span id="MoodEmoji"> {mood.emoji}</span>
            </button> 
          </li>
        ))}      
      </ul>

        { pick &&  (
          <div>
            <div>Today you get:</div>
            <a href={pick.url} target="_blank" > Good vibes only... </a>
          </div>
        )}

      </body>

    </div>
  );
}