import React, { useEffect, useState }  from "react";
import './App.css';
// import blessed from './emoticons/blessed.png'; 
//import emoticons from './emoticons'; 

// console.log(blessed)

function App() {

  const [moods, setMoods] = useState([{name:"sad", emoji:"😕"}, {name:"blessed", emoji:"🤗"}, {name:"determined", emoji:"😏"}, {name:"fidgety", emoji:"😣"}]); // Take all the moods
  const [pick, setPick] = useState(null) // Match to the correct one


  // laucnh when page get loaded 
  // useEffect(() => {
  //   getResponses(); // 
  // }, []);

  // function handleClick(e) {
  //   e.preventDefault()
  
  //   // console.log(e.target.name)

  //   getAresponse() 

  // }


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
    <div className="App">
      <header>
      React! Are you working? 
      </header>


    <ul>

    {/* below is an attempt to have the button recognised*/}

      { moods.map((mood) => (
        <li key={mood.name}>

        <button name={mood.name} onClick={() => getAresponse(mood.name)}>{mood.emoji}{mood.name}</button>

        </li>
      )) }

    
    </ul>

      { pick &&  (

        <div >


      {/* <h2> Your pick for today:</h2> */}

      <h3> 

        <a href={pick.url}> your pick for today </a>

      </h3>  

      </div>

      )}

    </div>

  );

}

export default App;
