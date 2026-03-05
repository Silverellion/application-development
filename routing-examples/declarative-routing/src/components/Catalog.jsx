import { Link } from "react-router-dom";
import React from "react";

const Catalog = () => {
  return (
    <>
      <h1>Catalog</h1>
      <p>You are in Catalog!</p>
      <Link to="/">
        <u>Home</u>
      </Link>
    </>
  );
};

export default Catalog;
