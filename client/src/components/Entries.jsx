import { useEffect, useState } from "react";

export default function Entries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/messages")
      .then((response) => response.json())
      .then((data) => {
        setEntries(data);
      });
  }, []);

  return (
    <div className="entries-container">
      <h2 className="entries-title">Entries</h2>
      <ul>
        {entries.length > 0 ? (
          entries.map((message, index) => (
            <li key={index}>
              <p>Name: {message.name}</p>
              <p>Relationship: {message.relationship}</p>
              <p>Message: {message.message}</p>
            </li>
          ))
        ) : (
          <p>No entries available.</p>
        )}
      </ul>
    </div>
  );
}
