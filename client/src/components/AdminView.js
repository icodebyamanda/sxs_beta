import React, { useEffect, useState } from "react";

export default function AdminView() {

  const [newEntries, setNewEntries] = useState([]);
  const [mood, setMood] = useState("");
  const [format, setFormat] = useState("");
  const [url, setUrl] = useState("");
  // const [newEntryDisplay, setNewEntryDisplay] = usesState("");



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
    .then(() => getResponses())
    .catch((error) => {
      return error;
    });
  };

  let { isNewEntryAdded } = newEntries;

  return (
    
    <div>
      
      <h2>This is the Admin page</h2>


      <form onSubmit={handleSubmit}>
        <label>
          
        Pick the mood this gift will address:

          <select id="moods" name="moods" value={mood} onChange={handleMoodChange}>

            <option value="empty"></option>
            <option value="blessed">Blessed</option>
            <option value="determined">Determined</option>
            <option value="fidgety">Fidgety</option>
            <option value="sad">Sad</option>

          </select>

        </label>
​
        <label>
          Pick the media format:

          <select id="formats" name="formats" value={format} onChange={handleFormatChange}>

            <option value="empty"></option>
            <option value="video">Video</option>
            <option value="quote">Quote</option>

          </select>

        </label>

        <label>
          Bring on the URL:
          <input
            type="text"
            name="url"
            value={url}
            onChange={handleUrlChange}
          />
        </label>
​
        <label>
          <input type="submit" value="submit" />
        </label>
      </form>

    { isNewEntryAdded ? (     
      <div>

        New entry added!

        <a href={url} target="_blank" > Click here to enjoy it right away</a>

      </div>

    ) : (
      <div> </div>
    )}

    </div>
  );
}
