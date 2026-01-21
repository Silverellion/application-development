import React from "react";
import "./Alert.css";

export const Alert = ({ type, text }) => {
  if (!type) return null;

  return <div className={`alert alert-${type}`}>{text}</div>;
};
