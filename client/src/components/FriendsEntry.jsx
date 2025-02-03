import { useEffect, useState } from "react";

export default function FriendsEntries() {
  const [friendsMessages, setFriendsMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/friendsMessages")
      .then((response) => response.json())
      .then((data) => {
        setFriendsMessages(data);
      });
  }, []);

  return (
    <div className="friends-entries-container">
      <h2 className="friends-entries-title">Friends Entries</h2>
      <ul>
        {friendsMessages.length > 0 ? (
          friendsMessages.map((message, index) => (
            <li key={index}>
              <p>Name: {message.name}</p>
              <p>Relationship: {message.relationship}</p>
              <p>Message: {message.message}</p>
            </li>
          ))
        ) : (
          <p>No friends messages available.</p>
        )}
      </ul>
    </div>
  );
}
