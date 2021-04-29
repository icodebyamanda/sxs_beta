import React, { useEffect, useState } from "react";
import backgroundUser from "../assets/headers/userHeader2.png"
//import Headers from "./components/Headers";



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

      <header className="header"
        style={{ backgroundImage: `url(${backgroundUser})`}}
      >
          <h1> Step By Step </h1> 
          <div className="subheading">
          How do you feel today?
          </div>        
      </header>

      <div className="left">Left</div>

        <div className="core userCore">

          {/* <div id="userQuestion">
          How do you feel today?
          </div> */}

          <div className="userxCore">

            <ul className="no-bullet moodList">
              
            { moods.map((mood) => (          
                <li key={mood.name}>
                  <button id="moodButton" className="buttons" name={mood.name} onClick={() => getAresponse(mood.name)}>
                    <span> {mood.name} </span>  <br></br> <span id="MoodEmoji"> {mood.emoji}</span>
                  </button> 
                </li>
              ))}    
            </ul>
          </div>
        </div>
            
            { pick &&  (
              <div className="response">
                <div>Today you get:</div>
                <a href={pick.url} target="_blank" > Good vibes only... </a>
              </div>
            )}

      <div className="right">Right</div>

      <div className="footerApp"></div>

    </div>
  );
}