import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  // This should be a state variable.
  // const isFavorite = false;
  const [isFavorite, setIsFavorite] = useState(false);

  function handleClick() {
    setIsFavorite(!isFavorite);
  }
  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
        handleClick();
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
