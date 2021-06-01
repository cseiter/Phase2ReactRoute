import React from "react";
import { directors } from "../data";

function Directors() {
  const indDirector = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
    </div>
  ));
return (
<div>
  <h1>Directors Page</h1>
  {indDirector}
</div>
)
}

export default Directors;
