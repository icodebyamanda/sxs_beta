import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import backgroundAdmin from "../assets/headers/5-SxS_Banner_Hello.png"

export default function Homepage() {

  return (

    <div className="grid-container">

    <header className="header" id="homepageHeader"
        style={{ backgroundImage: `url(${backgroundAdmin})`}}
      >
 
      </header>

      <div className="left">Left</div>

      <div className="core">
        
        <div>

          Welcome, Welcome Friend!
          
          This morning tool is for you: 
          
          to help you acknowledge your emotions, avoid denial and receive back some positive vibes to get you going with your day.

          In the 'Admin Tab', store some links, videos or quotes, that inspire you, make you happy and which you know, would help you start the day on a positive foot. 

          In the 'User Tab', select the emoticon that matches the closest your emotions. You will receive back one of these links you have previously stored for yourself.
         
          Simple right ? 
          
          So get out of bed and make that step. Embrace the day, Step By Step.

        </div>
      
      </div>

      <div className="right">Right</div>


    </div>


    

  );
}