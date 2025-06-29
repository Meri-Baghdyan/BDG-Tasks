import React from "react";
import './App.css';
import { Button } from "./components/Button";
// import { Input } from "./components/Input";


function App() {
  return (
    <div>
      <Button text="Input" onClick={() => alert("Input clicked")} />
      <Button text="Sign Up" onClick={() => alert("Sign Up clicked")} />
      {/* <Input text="Email" placeholder="Enter your Email"></Input>
      <Input text="Password" placeholder="Enter your password"></Input>
      <Input text="Email" placeholder="Enter your Email"></Input>
      <Input text="Create password" placeholder="Create your password"></Input>
      <Input text="Confirm password" placeholder="Confirm your password"></Input> */}
    </div>
  );
}

export default App;