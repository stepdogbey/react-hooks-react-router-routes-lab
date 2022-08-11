import React from "react";
import { directors } from "../data";
function Directors() {
  const directorsList = directors.map((dir) => (
    <div key={dir.name}>
      <h2>{dir.name}</h2>
      <ul>
        {dir.movies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}
export default Directors;
