import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(jokes);

  return (
    <>
      <h1>Pravesh</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke, index) => {
        return (
          <div>
            <h3>{joke.name}</h3>
            <h2>{joke.author}</h2>
          </div>
        );
      })}
    </>
  );
}

export default App;
