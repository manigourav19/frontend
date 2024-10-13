//---------------------------admin
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.socialMediaHandle}</p>
            <div>
              {user.images.map((img, index) => (
                <img key={index} src={`/${img}`} alt={`Uploaded ${index}`} width="100" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
