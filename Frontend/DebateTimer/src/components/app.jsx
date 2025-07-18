import React from "react";
import Button from "./button";
import Clock from "./clock";
function App(){
  return (
    <div>
      <Clock time="00:00" />
      <Button text="Start" />
      <Button text="Stop" />
      <Button text="Reset" />
    </div>
  );
}
export default App;