import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const mappedToys = toys.map(toy => <ToyCard key={toy.id} {...toy} />)

  return (
    <div id="toy-collection">{mappedToys}</div>
  );
}

export default ToyContainer;
