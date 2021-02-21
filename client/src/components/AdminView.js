import React, { useEffect, useState } from "react";

export default function AdminView() {

  const [newEntries, setNewEntries] = useState([]);
  const [spirit, setSpirit] = useState("");
  const [media, setMedia] = useState("");
  const [url, setUrl] = useState("");



  return (
    <div>
      <h2>This is the Admin page</h2>

      <form >
      {/* <form onSubmit={handleSubmit}> */}
        <label>
          
        Is it sad, blessed, determined or a fidgety' spirit this gift is meant to address:
          <input
            type="text"
            name="spirit"
            // value={spirit}
            // onChange={handleSpiritChange}
          />
        </label>
​
        <label>
          A quote or a video? Pick the media format:
          <input
            type="text"
            name="media"
            // value={media}
            // onChange={handleMediaChange}
          />
        </label>

        <label>
          Bring on the URL:
          <input
            type="text"
            name="url"
            // value={url}
            // onChange={handleURLChange}
          />
        </label>
​
        <label>
          <input type="submit" value="submit" />
        </label>
      </form>

    <div> New entry added! Enjoy it right away:</div>

    </div>
  );
}
