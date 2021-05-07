import React, { useEffect, useState } from "react";
import backgroundAdmin from "../assets/headers/adminHeader.png"
import Footer from './Footer';

export default function AdminView() {

  const [newEntries, setNewEntries] = useState([]);
  const [mood, setMood] = useState("");
  const [format, setFormat] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");
  const [newEntryDisplay, setNewEntryDisplay] = useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    addNewEntry();
    displayLastEntry();
    // clearForm();
  };

  function handleMoodChange(e) {
    setMood(e.target.value);
  }

  function handleFormatChange(e) {
    setFormat(e.target.value);
  };

  function handleUrlChange(e) {
    setAuthor(e.target.value);
  };

  function handleUrlChange(e) {
    setUrl(e.target.value);
  };

  function handleUrlChange(e) {
    setDescription(e.target.value);
  };

  function handleUrlChange(e) {
    setNote(e.target.value);
  };

 const displayLastEntry = () => {
    setNewEntryDisplay(url)

 }

//  function clearForm() {
//     setMood('')
//     setFormat('')
//     setUrl('')
//  };

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
        <h2 id="adminSubheading">
          Got inspired?
          </h2>      
      </header>

      <div className="left"></div>

        <div className="core adminCore">
        <div className="userxCore">

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
              <div className="formTitle">Author's name <span className="italicStyling">(e.g. Lizzo)</span></div>
                <input
                  className="enteredValues"
                  type="text"
                  name="author"
                  value={author}
                  onChange={handleUrlChange}/>
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

              <label id="inputAsAText" >
              <div className="formTitle">Short description of the link <span className="italicStyling">(e.g. Lizzo' Song Good as Hell)</span></div>
                <input
                  className="enteredValues"
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleUrlChange}/>
              </label>

              <label id="inputAsAText" >
              <div className="formTitle"> Note to yourself<span className="italicStyling"> (e.g. Whenever you may feel bad about yourself, know you're Good As Hell)</span></div>
                <input
                  className="enteredValues"
                  type="text"
                  name="note"
                  value={note}
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
              <a href={url} target="_blank"> <div className="responseLink">Click here to enjoy it right away </div></a>
            </div>
          )}

        <div><Footer /></div>

      </div>

      <div className="right"></div>


    </div>
  );
}
