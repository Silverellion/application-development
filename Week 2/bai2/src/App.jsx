import React from "react";
import "./app.css";
import { CreateButton } from "./components/button/Button";

const App = () => {
  return (
    <>
      <CreateButton text="Hello world" type="primary" />
      <CreateButton text="Warning!" type="danger" />
    </>
  );
};

export default App;
