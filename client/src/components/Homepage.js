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
        Welcome!
        At the moment I am doing nothing
        and I got commented out in my parent file
      </div>

      <div className="right">Right</div>

      <div className="footer">
        Footer

      </div>


    </div>


    

  );
}