import React, { useEffect, useState } from "react";

export default function Homepage() {

  return (

    <div className="grid-container">

    <header className="header" id="homepageHeader">
      <h1 id="homepageHOne"> Step By Step </h1>
      <h2 id="HomepageSubheading">
        <div className="forSpacing"> 'Vulnerability is the birthplace of innovation, creativity, and change' </div>
        <div className="forSpacing"> Brené Brown </div>
      </h2> 
    </header>

      <div className="left">Left</div>

      <div className="core">
        
        <div className="homepageText">

          <h3 className="alignLeft"> Welcome Friend, </h3>
          <h4 className="alignLeft"> This morning tool aims at helping you acknowledge your emotions, avoid denial and receive back some positive vibes to get you going with your day. </h4>

          <p> In the <span className="spanHomepage"> 'Admin Tab' </span>, store some links, videos or quotes, that inspire you, make you happy and which you know, would get you on a positive foot.<br></br>
          You would need to organise these links according to the emotion you think they should address. </p>

          <p> In the <span className="spanHomepage"> 'User Tab' </span>, select the emoticon that matches the closest your emotions. <br></br>
          You will receive back one of these links you have previously stored for yourself.  </p>
         
          <p className="spanHomepage"> Simple right ?  </p>
          
          <p> So jump out of bed to embrace the day, and allow yourself to do so, <span className="spanHomepage"> Step By Step. </span> </p>

      <div className="right">Right</div>


    </div>


    

  );
}