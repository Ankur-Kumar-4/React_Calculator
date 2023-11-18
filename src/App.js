import React, { Component, useState } from "react";

import "./App.css";

function App() {
  const [val, setVal] = useState(null);
  const [error, setError] = useState("");
  const [num1, setNum1] = useState(null);
  const [validation, setValidation] = useState("");
  const [num2, setNum2] = useState(null);

  const validateInputs = () => {
    setError("");

    if (num1 == null || num1 === "") {
      setError("Num1 cannot be empty");
      return false;
    }
    if (num2 == null || num2 === "") {
      setError("Num2 cannot be empty");
      return false;
    }

    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    console.log(n1);

    if (isNaN(num1)) {
      console.log("is N1 NAN");
      setError("Num1 is invalid");
      return false;
    }

    if (isNaN(num2)) {
      setError("Num2 is invalid");
      return false;
    }

    return true;
  };
  const add = () => {
    let isvalid = validateInputs();
    setVal(parseInt(num1) + parseInt(num2));
    
    if(isvalid){
    setValidation("Success!");
    }else{

      setValidation("Error!");
    }

  };
  const sub = () => {
    let isvalid = validateInputs();
    setVal(parseInt(num1) - parseInt(num2));
    
    if(isvalid){
    setValidation("Success!");
    }else{

      setValidation("Error!");
    }
  };
  const mul = () => {
    let isvalid = validateInputs();
    setVal(parseInt(num1) * parseInt(num2));
    
    if(isvalid){
    setValidation("Success!");
    }else{

      setValidation("Error!");
    }
  };
  const divide = () => {
    let isvalid = validateInputs();
    setVal(parseInt(num1) / parseInt(num2));
    
    if(isvalid){
    setValidation("Success!");
    }else{

      setValidation("Error!");
    }
  };

  const handleOnNum1Change = (event) => {
    setNum1(event.target.value);
  };
  const handleOnNum2Change = (event) => {
    setNum2(event.target.value);
  };

  return (
    <div className="card">
      <center>
        <h1>React Calculator</h1>
      </center>
      <input
        onChange={handleOnNum1Change}
        type="text"
        value={num1}
        placeholder="Num 1"
      />
      <input
        onChange={handleOnNum2Change}
        type="text"
        value={num2}
        placeholder="Num 2"
      />

      <div className="operators">
        <div onClick={add}>+</div>
        <div onClick={sub}>-</div>
        <div onClick={mul}>*</div>
        <div onClick={divide}>/</div>
      </div>



      
       <div className={validation ==="Success!" ? "sucess" : "error"}>{validation}</div>
      {error.length > 0 && <div className="result">{error}</div>}

      {! isNaN(val) && <div className="validation">{val}</div>}

    </div>
  );
}

export default App;
