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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formValues.name,
        relationship: formValues.relationship,
        message: formValues.message,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Successfully submitted!");

        setFormValues({
          name: "",
          relationship: "",
          message: "",
        });
      } else {
        alert("Error submitting the form. Please try again.");
      }
    });
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Wedding Message</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Write your name"
          required
          onChange={handleChangeFormValues}
          value={formValues.name}
        />
        <label htmlFor="relationship" className="form-label">
          Relationship:
        </label>
        <input
          type="text"
          id="relationship"
          name="relationship"
          className="form-input"
          placeholder="Family or Friend?"
          required
          onChange={handleChangeFormValues}
          value={formValues.relationship}
        />
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <input
          type="text"
          id="message"
          name="message"
          className="form-input"
          placeholder="Write your message"
          required
          onChange={handleChangeFormValues}
          value={formValues.message}
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}
