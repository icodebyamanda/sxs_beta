import React, { useEffect, useState } from "react";
import Footer from './Footer';

export default function HelloWorld() {

  return (

    <div className="grid-container">

    <header className="header" id="homepageHeader">
      <h1> Step By Step </h1>
      <h2 id="HomepageSubheading">
        <div> 'Vulnerability is the birthplace of innovation, creativity, and change'</div> <div> by Brené Brown </div>
      </h2>
    </header>

      <div className="left"></div>

      <div className="core">
        
        <div className="homepageText">

          <h3 className="alignLeft hThreehomepageFontSize"> Hello World, </h3>
          <h4 className="alignLeft hFourhomepageFontSize"> This morning tool aims at helping you acknowledge your emotions, avoid denial for which you receive back some positive vibes to get you going with your day. </h4>

          <p> In the <span className="spanHomepage"> 'Admin Space' </span>, store some links, videos or quotes, that inspire you, make you happy and make you feel good.<br></br>
          You would need to match these links to the emotion you would like them to address to. </p>

          <p> In <span className="spanHomepage"> 'Your Routine' </span>, select the emoticon that matches the closest your current emotions. <br></br>
          In return, you will receive one of these links you have previously stored.  </p>
         
          <p className="spanHomepage"> Simple, right ?  </p>
          
          <p> So jump out of bed and <span className="spanHomepage"> Step By Step, </span> embrace the day. </p>
        
        </div>

        <div><Footer /></div>

      </div>

      <div className="right"></div>

    </div>

  );
}