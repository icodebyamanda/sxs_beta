import React, { useEffect, useState } from "react";
import backgroundAdmin from "../assets/headers/adminHeader.png"
import Footer from './Footer';

export default function AdminView() {

  const [newEntries, setNewEntries] = useState({
    mood: "",
    format: "",
    author: "",
    url: "",
    description: "",
    note: "",
  });

  const [newEntryDisplay, setNewEntryDisplay] = useState(newEntries.url);


  const handleChange = (e) => {
    const value = e.target.value;
  
  setNewEntries((state) => ({
    ...state,
    [e.target.name]: value,
  }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewEntry();
    displayLastEntry();
    clearForm();
  };


 const displayLastEntry = () => {
    setNewEntryDisplay(newEntries.url)

 }

 const clearForm = () => {
  setNewEntries({
    mood: "",
    format: "",
    author: "",
    url: "",
    description: "",
    note: "",
  });
};

  const getResponses = () => {
    fetch("/selections")
    .then((selection) => selection.json())
    .then((newEntries) => {
      setNewEntries(newEntries);
    })
    .catch((error) => {
      return error;
    });
  };

  const addNewEntry = () => {
    fetch("/selections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntries),
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
                <select className="enteredValues"  id="mood" name="mood" value={newEntries.mood} onChange={handleChange}>
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
                <select className="enteredValues" id="format" name="format" selected={newEntries.format} value={newEntries.format} onChange={handleChange}>
                  <option value="empty"></option>
                  <option value="video">Video</option>
                  <option value="quote">Quote</option>
                </select>
              </label>

              <label id="inputAsAText" >
              <div className="formTitle">Add the author's name</div>
                <input
                  className="enteredValues"
                  type="text"
                  name="author"
                  value={newEntries.author}
                  placeholder="e.g. Lizzo"
                  onChange={handleChange}/>
              </label>


              <label id="inputAsAText" >
              <div className="formTitle">Bring on the URL</div>
                <input
                  className="enteredValues"
                  type="text"
                  name="url"
                  value={newEntries.url}
                  placeholder="e.g. https://youtu.be/SmbmeOgWsqE"
                  onChange={handleChange}/>
              </label>

              <label id="inputAsAText" >
              <div className="formTitle">Add a short description of the link</div>
                <input
                  className="enteredValues"
                  type="text"
                  name="description"
                  value={newEntries.description}
                  placeholder="e.g. Lizzo' Song Good as Hell"
                  onChange={handleChange}/>
              </label>

              <label id="inputAsAText" >
              <div className="formTitle"> Send a note to your future self</div>
                <input
                  className="enteredValues"
                  type="text"
                  name="note"
                  value={newEntries.note}
                  placeholder="e.g. Be kind to yourself, you're Good As Hell!"
                  onChange={handleChange}/>
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
              <a href={newEntryDisplay} target="_blank"> <div className="responseLink">Click here to enjoy it right away </div></a>
            </div>
          )}

        <div><Footer /></div>

      </div>

      <div className="right"></div>


    </div>
  );
}
