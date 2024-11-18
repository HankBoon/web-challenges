import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley />;
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? <span>😊</span> : <span>🥹</span>}</h1>;
}
