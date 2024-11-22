import "./styles.css";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleCreateUser(name, email) {
    setName(name);
    setEmail(email);
  }

  // function handleSetName(name) {
  //   setName(name);
  // }

  // function handleSetEmail(email) {
  //   setEmail(email);
  // }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form handleCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}