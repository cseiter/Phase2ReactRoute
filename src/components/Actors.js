import React from "react";
import { actors } from "../data";

function Actors() {
  const indActor = actors.map((actor) => (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
    </div>
  ));
  return (
  <div>
    <h1>Actors Page</h1>
    {indActor}
  </div>
  );
}

export default Actors;
