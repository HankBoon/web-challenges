import "./styles.css";

export default function App() {
  return <Article></Article>;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">New Header</h2>
      <label htmlFor="input">Your text here:</label>
      <input type="text" id="input" />
      <a
        href="https://en.wikipedia.org/wiki/React_(software)"
        className="article__link"
      >
        Link to Wikipedia
      </a>
    </article>
  );
}
