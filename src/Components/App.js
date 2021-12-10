import React from "react";
import "./App.css";
import GlobalButton from "./Common/Button";

function App() {
  const clickHandler = ()=>{
alert("hi")
  }
  return (
    <div>
      <GlobalButton name="click" variant="contained" onClick={clickHandler} color="error"/>
      <GlobalButton name="click" variant="contained" onClick={clickHandler} color="error"/>
    </div>
  );
}

export default App;
