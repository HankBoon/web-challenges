import "./Card.css";

export default function Card({ key, name }) {
  return (
    <p key={key} className="card">
      {name}
    </p>
  );
}
