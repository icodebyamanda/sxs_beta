import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function UserName() {

  const history = useHistory();

  const [userName, setUsername] = useState([])

  useEffect(() => {

		let token = localStorage.getItem("token");
		if (!token) {
			history.push("/login");
		}
		console.log(token);
    getUserName();
	}, []);

  const getUserName = async () => {
    try {
      const database = await axios.get(`/users/profile`, {
        headers: { "x-access-token": localStorage.getItem("token") },
      });
      setUsername(database.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div> {userName.username}</div>
    </div>
  )
}
