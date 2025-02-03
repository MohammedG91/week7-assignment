import { useEffect, useState } from "react";

export default function FamilyEntries() {
  const [familyMessages, setFamilyMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/familyMessages")
      .then((response) => response.json())
      .then((data) => {
        setFamilyMessages(data);
      });
  }, []);

  return (
    <div className="family-entries-container">
      <h2 className="family-entries-title">Family Entries</h2>
      <ul>
        {familyMessages.length > 0 ? (
          familyMessages.map((message, index) => (
            <li key={index}>
              <p>Name: {message.name}</p>
              <p>Relationship: {message.relationship}</p>
              <p>Message: {message.message}</p>
            </li>
          ))
        ) : (
          <p>No family messages available.</p>
        )}
      </ul>
    </div>
  );
}
