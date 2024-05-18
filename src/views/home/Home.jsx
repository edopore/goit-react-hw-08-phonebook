import { Navbar } from 'components/navbar/Navbar';
import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className="container">
      <div className="title p-2 border">
        <hr />
        <h1>Welcome to Phonebook</h1>
        <hr />
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default Home;
