
import React, { useState } from "react";

const UserList = () => {

  const [users] = useState([
    { id: 1, name: "Haseena", email: "shaseena162.com", phone: "7842618084" },
    { id: 2, name: "Hiranyaa", email: "hiranya78@gmail.com", phone: "987-654-3210" },
    { id: 3, name: "sana", email: "sana90@gmail.com", phone: "555-555-5555" }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            <span style={{ cursor: "pointer", color: "blue" }}>{user.name}</span>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
          <h3>User Details</h3>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
