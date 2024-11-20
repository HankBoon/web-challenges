import "./styles.css";

export default function App() {
  return <Greeting name="Niklas" />;
}

function Greeting({ name }) {
  return <h1>Hello {name === "Niklas" ? "Coach" : "Hauke"}</h1>;
}
