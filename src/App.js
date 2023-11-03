import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home");
  };

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = async function submit(e) {
    e.preventDefault();
    try {
        
      const response = await axios
        .post("http://localhost:3000/api/employees", {    //server port address
          name,
          designation,
        })
        console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleRetrieve = async function retrieve(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await axios
  //     .get('http://localhost:3000/api/retrieveEmployees');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div className="App">
      <h1>Employee Details</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>&nbsp;
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <br/><br/>
        <label>Designation</label>&nbsp;
        <input
          type="text"
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
          placeholder="Designation"
        />

        <button type="submit">
          Submit
        </button>&nbsp;&nbsp;
        <button onClick={handleClick}>Details</button>
      </form>

      {/* <button onSubmit={handleRetrieve}>Get Details</button> */}
      
    </div>
  );
}

export default App;
