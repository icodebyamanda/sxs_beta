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
    clearForm();
  };

  function handleMoodChange(e) {
    setMood(e.target.value);
  }

  function handleFormatChange(e) {
    setFormat(e.target.value);
  };

  function handleUrlChange(e) {
    setUrl(e.target.value);
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
      </header>

      <div className="left">Left</div>

        <div className="core adminCore">

            <form onSubmit={handleSubmit} className="formStyle">

              <label>           
                <div className="formTitle">Pick the mood this gift will address</div>
                <select className="EnteredValues"  id="moods" name="moods" value={mood} onChange={handleMoodChange}>
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
                <select className="EnteredValues" id="formats" name="formats" value={format} onChange={handleFormatChange}>
                  <option value="empty"></option>
                  <option value="video">Video</option>
                  <option value="quote">Quote</option>
                </select>
              </label>

              <label id="inputAsAText" >
              <div className="formTitle">Bring on the URL</div>
                <input
                  className="EnteredValues"
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
            <div className="display">
              <div id="EntryAdded">New entry added!</div>
              <a href={url} target="_blank" > <span id="UrlAdmin">Click here to enjoy it right away </span></a>
            </div>
          )}

      <div className="right">Right</div>

      <div className="footerApp"></div>


    </div>
  );
}
