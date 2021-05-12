import React, { useEffect, useState } from "react";
import backgroundUser from "../assets/headers/userHeader2.png"
//import Headers from "./components/Headers";
import Footer from './Footer';


export default function UserView() {

  const [moods, setMoods] = useState([
    {name:"Sad", emoji:"😕"}, 
    {name:"Blessed", emoji:"🤗"}, 
    {name:"Determined", emoji:"😏"}, 
    {name:"Fidgety", emoji:"😣"}]); // Take all the moods
  const [pick, setPick] = useState(null) // Match to the correct one


  const getOneSelection = (mood) => {

    fetch(`/selections/${mood}`)
      .then((selection) => selection.json())
      .then((select) => {
        console.log(select)
        setPick(select)})

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
          <h2>
          How do you feel today?
          </h2>        
      </header>

      <div className="left"></div>

        <div className="core userCore">

          <div className="userxCore">

            <ul className="no-bullet moodList">
              
            { moods.map((mood) => (          
                <li key={mood.name}>
                  <button className="moodButton" name={mood.name} onClick={() => getOneSelection(mood.name)}>
                    <div id="moodTitle"> {mood.name} </div>  <br></br> <div id="moodEmoji"> {mood.emoji}</div>
                  </button> 
                </li>
              ))}    
            </ul>
          </div>


            { pick &&  (
              <div className="response">
                <div className="noteLine"><span className="noteIntro">Note to self  </span><br></br><span className="noteData"> {pick.note} xxx </span></div>
                <div className="urlHeading" id="responseSent">Today you get,</div>
                <a href={pick.url} target="_blank"> <br></br> <div className="responseLink"> Good vibes only...  </div> </a>
              </div>
            )}

          <div><Footer /></div>

        </div>

      <div className="right"></div>

    </div>
  );
}