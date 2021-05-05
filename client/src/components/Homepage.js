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
        
        <span> 
          Morning you, <br />
          Today will be grand, <br />
          and for everything else... <br />
        </span>
        <span> 'Hindsight is a gift' (H. Gadsby) </span>
      
      </div>

      <div className="right">Right</div>


    </div>


    

  );
}