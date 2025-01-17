import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Admin from "./Admin";


const App = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const [formData, setFormData] = useState({
    timp: "",
    calitate: "",
    observatii: "",
	workId: id || "" // Set the `id` in the form data, fallback to empty if not present
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch("https://4wpyqi1ta9.execute-api.eu-central-1.amazonaws.com/review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send form data
        });

        if (!response.ok) {
          throw new Error("Failed to submit the form");
        }

        const result = await response.json();
        console.log("Success:", result);
        alert("Review request submitted successfully!");
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to submit the form.");
      }
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Va multumim pentru feedback!</h2>
		
		<p> Va rugam completati urmatoarele rubrici: </p>

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
                  name="timp"
                  value={index + 1}
                  onChange={handleChange}
                  checked={formData.timp === String(index + 1)}
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
                  name="calitate"
                  value={index + 1}
                  onChange={handleChange}
                  checked={formData.calitate === String(index + 1)}
                />
                {index + 1}
              </label>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="observatii" style={{ display: "block", marginBottom: "10px" }}>
			Q3: Mai aveti ceva de adaugat?
          </label>
          <input
            type="text"
            id="observatii"
            name="observatii"
            value={formData.observatii}
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
