import React, { useEffect, useState } from "react";

export default function AdminView() {

  const [newEntries, setNewEntries] = useState([]);
  const [mood, setMood] = useState("");
  const [format, setFormat] = useState("");
  const [url, setUrl] = useState("");
  // const [newEntryDisplay, setNewEntryDisplay] = usesState("");


  //! could useEffect the solution to the new entry display being static?
  // useEffect(() => {
  //   getResponses();
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();
    addNewEntry();
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
      body: JSON.stringify({mood, format, url}), //maybe const names here <- Answer is yes!
    })
    .then((newEntries) => setNewEntries({newEntries: newEntries.url}) // send all list of responses BUT I want the last one so last post entry into the responses
    .catch((error) => { // Remove getResponses -> return object of that something inserted
      return error;
    });
  };

  // let { isNewEntryAdded } = {newEntries};

  return (
    
    <div>

      <header className="headerAdminView">

        <h1 id="hOneAdmin">Step By Step<span id="hTwoAdmin">Admin</span></h1>

      </header>
      
      <body>

      <div className="formAdminView">

        <form onSubmit={handleSubmit}>

          <label>
            
          <div className="FormIntroText">Pick the mood this gift will address:</div>

            <select className="EnteredValues" id="moods" name="moods" value={mood} onChange={handleMoodChange}>

              <option value="empty"></option>
              <option value="blessed">Blessed</option>
              <option value="determined">Determined</option>
              <option value="fidgety">Fidgety</option>
              <option value="sad">Sad</option>

            </select>

          </label>
  ​
          <label>

            <div className="FormIntroText">Pick the media format:</div>


            <select className="EnteredValues" id="formats" name="formats" value={format} onChange={handleFormatChange}>

              <option value="empty"></option>
              <option value="video">Video</option>
              <option value="quote">Quote</option>

            </select>

          </label>

          <label>
          <div className="FormIntroText">Bring on the URL:</div>
            <input
              className="EnteredValues" 
              type="text"
              name="url"
              value={url}
              onChange={handleUrlChange}
            />
          </label><br></br>
  ​
          <label>
            <input type="submit" value="submit" id="SubmitButton" />
          </label>
        </form>

      </div>

    <div className="NewEntryDisplay"> 

      { newEntries && (     
        <div>

          <div id="EntryAdded">New entry added!</div>

          <a href={url} target="_blank" > <span id="UrlAdmin"> Click here to enjoy it right away </span></a>

        </div>

      )}

    </div>
      </body>

    </div>
  );
}
