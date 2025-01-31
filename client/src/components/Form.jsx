import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    relationship: "",
    message: "",
  });

  function handleChangeFormValues(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      formValues.relationship !== "Friend" &&
      formValues.relationship !== "Family"
    ) {
      alert("Relationship must be either 'Friend' or 'Family'");
      return;
    }

    fetch("http://localhost:8080/new-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: formValues.name,
        relationship: formValues.relationship,
        message: formValues.message,
      }),
    });
  }

  return (
    <>
      <h2>Wedding Message</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Write your name"
          required
          onChange={handleChangeFormValues}
          value={formValues.name}
        />
        <label htmlFor="relationship">Relationship: </label>
        <input
          type="text"
          id="relationship"
          name="relationship"
          placeholder="Family or Friend?"
          required
          onChange={handleChangeFormValues}
          value={formValues.relationship}
        />
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Write your message"
          required
          onChange={handleChangeFormValues}
          value={formValues.message}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
