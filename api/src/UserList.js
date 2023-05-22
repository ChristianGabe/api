import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h1>List of Users</h1>
      <ul className="user-list">

        {listOfUsers.map(user => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
