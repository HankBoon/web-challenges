console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.results[2]["eye_color"]);
  const results = data.results;
  console.log(
    results.some(function (result) {
      console.log("function was called with", result.name);
      return result.name === "R2-D2";
    })
  );
  console.log(results);
}

fetchData();
