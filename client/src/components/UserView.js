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
    <div className="grid-container">

      <div className="header">
        <div id="user-header">
          <h1> Step By Step </h1>
        </div>          
      </div>

      <div className="left">Left</div>

        <div className="core" className="userCore">

          <div>
          How do you feel today?
          </div>

          <ul className="no-bullet" id="moodList">
          { moods.map((mood) => (          
              <li key={mood.name}>
                <button id="moodButton" name={mood.name} onClick={() => getAresponse(mood.name)}>
                  <span id="MoodName"> {mood.name} </span>  <br></br> <span id="MoodEmoji"> {mood.emoji}</span>
                </button> 
              </li>
            ))}      
          </ul>
        </div>
            
            { pick &&  (
              <div className="footer">
                <div>Today you get:</div>
                <a href={pick.url} target="_blank" > Good vibes only... </a>
              </div>
            )}

        

      <div className="right">Right</div>

    </div>
  );
}