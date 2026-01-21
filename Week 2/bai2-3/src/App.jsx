import React, { useState } from "react";
import "./app.css";
import { CreateButton } from "./components/button/Button";
import { Alert } from "./components/alert/Alert";

const App = () => {
  const [alertType, setAlertType] = useState(null);

  return (
    <>
      <CreateButton
        text="Hello world"
        type="primary"
        onClick={() => setAlertType("warning")}
      />
      <CreateButton
        text="Success"
        type="success"
        onClick={() => setAlertType("success")}
      />
      <CreateButton
        text="Error"
        type="danger"
        onClick={() => setAlertType("error")}
      />

      <Alert type={alertType} message={`This is ${alertType} alert`} />
    </>
  );
};

export default App;
