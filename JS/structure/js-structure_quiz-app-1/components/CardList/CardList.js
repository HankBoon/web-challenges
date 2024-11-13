// import cards from "../utils/cards.js";
// import Card from "../Card/Card.js";

export default function CardList(cards, Card, Bookmark) {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card, Bookmark);
    cardList.append(cardElement);
  });

  return cardList;
}
