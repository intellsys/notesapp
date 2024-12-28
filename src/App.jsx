import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted! Check the console for details.");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full viewport height
        margin: "0", // Remove extra spacing
        backgroundColor: "#f4f4f4",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Feedback Form</h1>

        {/* Question 1 */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Q1: Evaluati timpul in care a fost rezolvata problema
          </label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {Array.from({ length: 10 }, (_, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="question1"
                  value={index + 1}
                  onChange={handleChange}
                  checked={formData.question1 === String(index + 1)}
                />
                {index + 1}
              </label>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
		Q2: Evaluati interactiunea cu tehnicianul
          </label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {Array.from({ length: 10 }, (_, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="question2"
                  value={index + 1}
                  onChange={handleChange}
                  checked={formData.question2 === String(index + 1)}
                />
                {index + 1}
              </label>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="question3" style={{ display: "block", marginBottom: "10px" }}>
			Q3: Mai aveti ceva de adaugat?
          </label>
          <input
            type="text"
            id="question3"
            name="question3"
            value={formData.question3}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box"
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
