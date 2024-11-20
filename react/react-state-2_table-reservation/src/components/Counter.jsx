export default function Counter({ people, onButtonClick }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={() => onButtonClick(1)}
        >
          +
        </button>
        <div className="counter__button">{people}</div>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={() => onButtonClick(-1)}
        >
          -
        </button>
      </div>
    </>
  );
}
