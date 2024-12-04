// src/pages/Home.js
import React from "react";
import ExampleCard from "../components/ExampleCard";

const Home = () => (
  <div className="container">
    <h1>Welcome to the Course Project!</h1>
    <div className="d-flex flex-wrap">
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
    </div>
  </div>
);

export default Home;
