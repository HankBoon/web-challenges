import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return <Button text="Click me!" color="pink" onClick={handleClick} />;
}

function Button({ text, color, isDisabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
