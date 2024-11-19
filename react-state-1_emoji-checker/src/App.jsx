import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  console.log(code);
  function handleClick(emoji) {
    if (emoji === "reset") {
      setCode("");
    } else {
      setCode(code + emoji);
    }
    // console.log(emoji);
    // console.log(code);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          handleClick("reset");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
