import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Admin = () => {
  const [formData, setFormData] = useState({
    email: "",
    date: "",
    workers: "",
    location: "",
    description: "",
	  id: uuidv4() // Generate a random UUID for the id field
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
	  <div>
	  <h3>Demo page (simulare integrare API) </h3>
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "top",
        backgroundColor: "#ffffff",
		  padding:40
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
        {/* Email Client */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Email client:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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

        {/* Dată */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="date"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Dată:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
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

        {/* Angajați */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="workers"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Angajați (separați prin virgulă):
          </label>
          <input
            type="text"
            id="workers"
            name="workers"
            value={formData.workers}
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

        {/* Locație */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="location"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Locație:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
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

        {/* Descriere */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="description"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Descriere:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box"
            }}
            rows="4"
            required
          ></textarea>
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
          Trimite cerere pentru recenzie
        </button>
      </form>
    </div>
		  </div>
  );
};

export default Admin;
