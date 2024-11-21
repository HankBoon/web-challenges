export default function Form({ handleCreateUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    // lifting state up:
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    // wird ersetzt durch Hilfsfunktionen:
    // setName(data.name);
    // setEmail(data.email);

    // variante mit 2 Funktionen;
    // handleSetEmail(data.email);
    // handleSetName(data.name);

    //Variante mit nur einer Funktion:
    handleCreateUser(data.name, data.email);

    event.target.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
