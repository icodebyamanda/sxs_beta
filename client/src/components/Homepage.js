import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Homepage() {

  return (

    <div className="grid-container">

      <div className="header">
        Header
      </div>

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