import React, { useState } from "react";
import "./App.css";
import GlobalButton from "./Common/Button";
import GlobalInput from "./Common/Input";
import SliderContainer from './Slider'

function App() {
  const [inputValue, setInputValue] = useState (" ");
  const clickHandler = () => {
    alert(inputValue);
  };
  const inputDatais = (data) => {
    setInputValue(data);
  };
  return (
    <div style={{ padding: "15px" }}>
      <GlobalInput sendValue={inputDatais} />
      <GlobalButton
        name="click"
        variant="contained"
        onClick={clickHandler}
        color="error"
      />
     
    <div className="main">
    <div className="container">
         
          <div className="item">Two</div>
        </div>
        <textarea></textarea>
    </div>
    </div>
  );
}

export default App;
