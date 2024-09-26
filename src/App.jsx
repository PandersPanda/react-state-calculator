import { useState } from "react"
import "./App.css"

function App() {

  const [operator, setOperator] = useState("+")

  const Operator = () => {
    return <p>{operator}</p>
  }

  const operators = {
    "+": function(a, b) {return a + b},
    "-": function(a, b) {return a - b},
    "*": function(a, b) {return a * b},
    "÷": function(a, b) {return a / b} 
  }

  const ChangeOperator = (event) => {
    setOperator(event.target.innerText)
  }

  const ClearLeftPanel = () => {
    document.getElementById("left-panel-number").innerText = '0' 
  }

  const ClearRightPanel = () => {
    document.getElementById("right-panel-number").innerText = '0'
  }

  const NumberPressedRight = (event) => {
    let numberPanel = document.getElementById("right-panel-number")
    let number = event.target.innerText

    if(numberPanel.innerText === '0'){
      numberPanel.innerText = number
    }
    else{
      numberPanel.innerHTML += number
    }
  }

  const NumberPressedLeft = (event) => {
    let numberPanel = document.getElementById("left-panel-number")
    let number = event.target.innerText

    if(numberPanel.innerText === '0'){
      numberPanel.innerText = number
    }
    else{
      numberPanel.innerHTML += number
    }
  }

  const Calculate = () => {
    const leftNumber = document.getElementById("left-panel-number").innerText
    const rightNumber = document.getElementById("right-panel-number").innerText
    
    console.log(operator)
    const answer = operators[operator](Number(leftNumber), Number(rightNumber))
    document.getElementById("panel-answer-number").innerText = answer.toString()
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p id="left-panel-number">0</p>
        <div className="numbers">
          <button onClick={NumberPressedLeft}>1</button>
          <button onClick={NumberPressedLeft}>2</button>
          <button onClick={NumberPressedLeft}>3</button>
          <button onClick={NumberPressedLeft}>4</button>
          <button onClick={NumberPressedLeft}>5</button>
          <button onClick={NumberPressedLeft}>6</button>
          <button onClick={NumberPressedLeft}>7</button>
          <button onClick={NumberPressedLeft}>8</button>
          <button onClick={NumberPressedLeft}>9</button>
          <button onClick={NumberPressedLeft}>0</button>
          <button onClick={ClearLeftPanel}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <Operator />
        <div className="numbers">
          <button onClick={ChangeOperator}>+</button>
          <button onClick={ChangeOperator}>-</button>
          <button onClick={ChangeOperator}>*</button>
          <button onClick={ChangeOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p id="right-panel-number">0</p>
        <div className="numbers">
          <button onClick={NumberPressedRight}>1</button>
          <button onClick={NumberPressedRight}>2</button>
          <button onClick={NumberPressedRight}>3</button>
          <button onClick={NumberPressedRight}>4</button>
          <button onClick={NumberPressedRight}>5</button>
          <button onClick={NumberPressedRight}>6</button>
          <button onClick={NumberPressedRight}>7</button>
          <button onClick={NumberPressedRight}>8</button>
          <button onClick={NumberPressedRight}>9</button>
          <button onClick={NumberPressedRight}>0</button>
          <button onClick={ClearRightPanel}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p id="panel-answer-number">0</p>
        <div>
          <button onClick={Calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
