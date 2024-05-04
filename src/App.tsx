import { useState } from "react";
import "./App.css";
import ListGroup from "./ListGroup";

function App() {
  let items = ["Soap", "Shampoo", "Rice", "Toothbrush", "Deodrant"];
  let countries = ["Sri Lanka", "India", "USA", "UK", "Saudi"];
  return (
    <div>
      <ListGroup items={items} heading="Items" />
      <ListGroup items={countries} heading="Countries" />
    </div>
  );
}

export default App;
