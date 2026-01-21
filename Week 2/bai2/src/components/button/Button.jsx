import React from "react";
import "./Button.css";

export const CreateButton = ({ text, type }) => {
  return <button className={`btn btn-${type}`}>{text}</button>;
};
