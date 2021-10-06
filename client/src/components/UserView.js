import React, { useEffect, useState } from "react";
import axios from "axios";
//import useAuth from '../hooks/useAuth';
import { useHistory } from "react-router-dom";
import backgroundUser from "../assets/headers/userHeader2.png"
//import Headers from "./components/Headers";
import Footer from './Footer';


export default function UserView() {

  //const auth = useAuth();
	const history = useHistory();

  const [moods, setMoods] = useState([
    {name:"Sad", emoji:"😕"}, 
    {name:"Blessed", emoji:"🤗"}, 
    {name:"Determined", emoji:"😏"}, 
    {name:"Fidgety", emoji:"😣"}]); // Take all the moods
  
    const [pick, setPick] = useState(null) // Match to the correct one

    
  useEffect(() => {

		let token = localStorage.getItem("token");
		if (!token) {
			history.push("/login");
		}
		console.log(token);
	}, []);


  
  const getOneSelection = async (mood) => {
    try {
      const database = await axios.get(`/selections/${mood}`, {
        headers: { "x-access-token": localStorage.getItem("token") },
      });

      console.log(database.data);
      setPick(database.data);
      
    } catch (error) {
      console.log(error);
    }
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


          { pick && (

            !pick.mood ? (
              <div> Sorry, sounds like you have no resource to match this mood :-/</div>
              

            ) : (
              <div className="response">
                <div className="noteLine"><span id="noteIntro">Note to self  </span><br></br><span id="noteData"> {pick.note} xxx </span></div>
                <div className="urlHeading" id="responseSent">Today you get,</div>
                <a href={pick.url} target="_blank"> <br></br> <div className="responseLink"> Good vibes only...  </div> </a>
              </div>
            ) 
              
          )}

          <div><Footer /></div>

        </div>

      <div className="right"></div>

    </div>
  );
}