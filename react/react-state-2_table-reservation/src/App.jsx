import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);
  function handleClick(operator) {
    setPeople(people + operator);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter people={people} onButtonClick={handleClick} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
