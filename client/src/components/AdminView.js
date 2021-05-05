import React, { useEffect, useState } from "react";
import backgroundAdmin from "../assets/headers/adminHeader.png"

export default function AdminView() {

  const [newEntries, setNewEntries] = useState([]);
  const [mood, setMood] = useState("");
  const [format, setFormat] = useState("");
  const [url, setUrl] = useState("");
  const [newEntryDisplay, setNewEntryDisplay] = useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    addNewEntry();
    displayLastEntry();
  };

  function handleMoodChange(e) {
    setMood(e.target.value);
  }

  function handleFormatChange(e) {
    setFormat(e.target.value);
  };

  function handleUrlChange(e) {
    setUrl(e.target.value);
        // clearForm();
  };

 const displayLastEntry = () => {
    setNewEntryDisplay(url)

 }

 function clearForm() {
    setMood('')
    setFormat('')
    setUrl('')
 };

  const getResponses = () => {
    fetch("/responses")
    .then((response) => response.json())
    .then((newEntries) => {
      setNewEntries(newEntries);
    })
    .catch((error) => {
      return error;
    });
  };

  const addNewEntry = () => {
    fetch("/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({mood, format, url}),
    })
    .then(() => setNewEntries(newEntryDisplay))
    .catch((error) => { 
      return error;
    });
  };

  return (
    
    <div className="grid-container">

      <header className="header"
        style={{ backgroundImage: `url(${backgroundAdmin})`}}
      >
        <h1>Step By Step</h1>
        <div className="defaultSubheading" id="adminSubheading">
          Got inspired?
          </div>      
      </header>

      <div className="left">Left</div>

        <div className="core adminCore">

            <form onSubmit={handleSubmit} className="adminFormStyle">

              <label>           
                <div className="formTitle">Pick the mood this gift will address</div>
                <select className="enteredValues"  id="moods" name="moods" value={mood} onChange={handleMoodChange}>
                  <option value="empty"></option>
                  <option value="blessed">Blessed</option>
                  <option value="determined">Determined</option>
                  <option value="fidgety">Fidgety</option>
                  <option value="sad">Sad</option>
                </select>
              </label>
      ​
              <label>
                <div className="formTitle">Pick the media format</div>
                <select className="enteredValues" id="formats" name="formats" value={format} onChange={handleFormatChange}>
                  <option value="empty"></option>
                  <option value="video">Video</option>
                  <option value="quote">Quote</option>
                </select>
              </label>

              <label id="inputAsAText" >
              <div className="formTitle">Bring on the URL</div>
                <input
                  className="enteredValues"
                  type="text"
                  name="url"
                  value={url}
                  onChange={handleUrlChange}/>
              </label>
      ​
              <label>
                <input type="submit" value="Submit" id="SubmitButton" />
              </label>

            </form>

        
        </div>

          { newEntryDisplay && (     
            <div className="response">
              <div className="urlHeading" id="entryAdded">New entry added!</div>
              <a href={url} target="_blank"> <div className="responseLink" id="adminLink">Click here to enjoy it right away </div></a>
            </div>
          )}

      <div className="right">Right</div>


    </div>
  );
}
