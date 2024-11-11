// import Header from "../Header/Header.js";
// import Form from "../Form/Form.js";
// import CardList from "../CardList/CardList.js";

export default function App(Header, Form, CardList, cards, Card, Bookmark) {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList(cards, Card, Bookmark));

  return app;
}
