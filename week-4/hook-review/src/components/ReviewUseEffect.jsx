import "./Review.css";
import React, { useEffect, useState } from "react";

export const ReviewUseEffect = () => {
  const [texts, setTexts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setTexts(data.slice(0, 10)));
  }, []);
  return (
    <div>
      <div className="title">useEffect:</div>
      <ul>
        {texts.map((text) => (
          <li key={text.id}>{text.title}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
