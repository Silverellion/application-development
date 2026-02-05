import React from "react";
import "./App.css";
import { ReviewUseState } from "./components/ReviewUseState";
import { ReviewUseEffect } from "./components/ReviewUseEffect";
import { ReviewUseReducer } from "./components/ReviewUseReducer";
import { ReviewUseMemo } from "./components/ReviewUseMemo";
import { ReviewUseCallback } from "./components/ReviewUseCallback";

const App = () => {
  return (
    <div>
      <ReviewUseState />
      <ReviewUseEffect />
      <ReviewUseReducer />
      <ReviewUseMemo />
      <ReviewUseCallback />
    </div>
  );
};

export default App;
