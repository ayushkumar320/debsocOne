import React from "react";
import Clock from "./clock";
import Button from "./button";

function Card() {
  return (
    <div className="card">
      <Clock />
      <p class="protected-time"></p>
      <Button />
    </div>
  );
}

export default Card;
