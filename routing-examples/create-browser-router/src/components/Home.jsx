import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <p>You are in Home!</p>
      <button onClick={() => navigate("/catalog")}>Go to Catalog</button>
    </>
  );
};

export default Home;
