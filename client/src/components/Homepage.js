import React from "react";
import { Link } from "react-router-dom";
import UserName from "./UserName";
import Footer from './Footer';

export default function Homepage() {

  return (

    <div className="grid-container">

    <header className="header" id="homepageHeader">
      <h1> Step By Step </h1>
      <h2 className="header" id="HomepageSubheading">
        Good morning and welcome <UserName /> 
      </h2> 
    </header>

      <div className="left"></div>

      <div className="core">
        
        <div className="homepageText">

          
          <h4 className="alignLeft hFourhomepageFontSize"> This morning tool aims at helping you acknowledge your emotions, avoid denial for which you receive back some positive vibes to get you going with your day. </h4>

          <p> In the <span className="spanHomepage"><Link to='/Admin'> 'Admin Space'</Link> </span>, store some links, videos or quotes, that inspire you, make you happy and make you feel good.<br></br>
          You would need to match these links to the emotion you would like them to address to. </p>

          <p> In <span className="spanHomepage"><Link to='/User'> 'Your Routine' </Link></span>, select the emoticon that matches the closest your current emotions. <br></br>
          In return, you will receive one of these links you have previously stored.  </p>
          
          <p> Now time to jump out of bed and <span className="spanHomepage"> Step By Step, </span> at your pace, embrace the day. </p>
        
        </div>

        <div><Footer /></div>

      </div>

      <div className="right"></div>

    </div>

  );
}