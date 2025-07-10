import React from "react";
import Input from "./Input";
import Button from "./Button";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center bg-no-repeat"
      style={{ backgroundImage: "url(https://images.pexels.com/photos/33779/hand-microphone-mic-hold.jpg)"}}
    >
      <div className="border border-orange-400 backdrop-blur-sm p-8 rounded-xl w-80 flex flex-col items-center gap-4 shadow-lg text-orange-400">
        <h1 className="text-2xl font-semibold tracking-wide">Login</h1>

        <Input type="email" placeholder="Enter your user ID" />
        <Input type="password" placeholder="Enter your password" />
        <Button label="Submit" />
      </div>
    </div>
  );
}

export default App;
