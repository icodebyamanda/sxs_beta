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
          
        Pick the spirit this gift will address:
          {/* <input list="spirits"
            name="spirit"
            // value={spirit}
            // onChange={handleSpiritChange}
          /> */}

          <select id="spirits" name="spirits">

            <option value="empty"></option>
            <option value="blessed">Blessed</option>
            <option value="determined">Determined</option>
            <option value="fidgety">Fidgety</option>
            <option value="sad">Sad</option>

          </select>

        </label>
​
        <label>
          A quote or a video? Pick the media format:
          {/* <input
            // type="text"
            // name="media"
            // value={media}
            // onChange={handleMediaChange}
          /> */}

          <select id="medias" name="medias">

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
