import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import backgroundAdmin from "../assets/headers/adminHeader.png"
import UserName from "./UserName";
import Footer from './Footer';

export default function AdminView() {

  const history = useHistory();

  const [newEntries, setNewEntries] = useState({
    mood: "",
    format: "",
    author: "",
    url: "",
    description: "",
    note: "",
  });

  const [newEntryDisplay, setNewEntryDisplay] = useState(newEntries.url);


  useEffect(() => {

		let token = localStorage.getItem("token");
		if (!token) {
			history.push("/login");
		}
		console.log(token);
	}, []);


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

  const addNewEntry = async () => {
    try {
      await axios.post(`/selections`, newEntries, {
        headers: { "x-access-token": localStorage.getItem("token") },
      });
    } catch (error) {
      console.log(error);
    }  
  }



  // const getResponses = async () => {
  //   try {
  //     const database = await axios.get(`/selections/list`, {
  //       headers: { "x-access-token": localStorage.getItem("token") },
  //     });
  //     setNewEntries(database.data)
  //   } catch (error) {
  //     console.log(error);
  //   }  
  // }



  return (
    
    <div className="grid-container">

      <header className="header"
        style={{ backgroundImage: `url(${backgroundAdmin})`}}
      >
        <h1>Step By Step</h1>
        <h2 id="adminSubheading">
          Got inspired <UserName /> ?
        </h2>      
      </header>

      <div className="left"></div>

        <div className="core adminCore">
          <div className="userxCore">

            <form onSubmit={handleSubmit} className="AdminForm">

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
                  onChange={handleChange}/>
              </label>


              <label id="inputAsAText" >
              <div className="formTitle">Bring on the URL</div>
                <input
                  className="enteredValues"
                  type="text"
                  name="url"
                  value={newEntries.url}
                  onChange={handleChange}/>
              </label>

              <label id="inputAsAText" >
              <div className="formTitle">Add a short description of the link</div>
                <input
                  className="enteredValues"
                  type="text"
                  name="description"
                  value={newEntries.description}
                  onChange={handleChange}/>
              </label>

              <label id="inputAsAText" >
              <div className="formTitle"> Send a note to your future self</div>
                <input
                  className="enteredValues"
                  type="text"
                  name="note"
                  value={newEntries.note}
                  onChange={handleChange}/>
              </label>
      ​
              <label>
                <input type="submit" value="Submit" className="SubmitButton" />
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
