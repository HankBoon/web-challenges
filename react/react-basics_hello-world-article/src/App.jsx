import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle></HelloWorldArticle>;
}

function HelloWorldArticle() {
  return (
    <article>
      <p>Para1</p>
      <p>Para2</p>
      <p>Para3</p>
    </article>
  );
}
