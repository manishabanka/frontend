import React from 'react';
import axios from "axios";

function Home () {
  const handleRetrieve = async function retrieve(e) {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/api/retrieveEmployees');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  return(
    <div classname='homepage'>
      <h1>Hello and Welcome!</h1>
      <button onSubmit={handleRetrieve}>Get Details</button>
    </div>
  )
}
export default Home;