import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 101, name: "banana", color: "yellow" },
    { id: 201, name: "apple", color: "red" },
    { id: 301, name: "mango", color: "red" },
    { id: 401, name: "pineapple", color: "yellow" },
    { id: 501, name: "pear", color: "green" },
    { id: 601, name: "orange", color: "orange" },
    { id: 701, name: "passion fruit", color: "red" },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" />  */}
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
