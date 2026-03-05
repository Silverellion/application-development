import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>You are in Home!</p>
      <Link to="/catalog">
        <u>Catalog</u>
      </Link>
    </>
  );
};

export default Home;
