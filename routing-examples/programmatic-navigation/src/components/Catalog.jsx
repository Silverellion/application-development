import { useNavigate } from "react-router-dom";
import React from "react";

const Catalog = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Catalog</h1>
      <p>You are in Catalog!</p>
      <button onClick={() => navigate("/")}>Return to Home</button>
    </>
  );
};

export default Catalog;
