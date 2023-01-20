import "./App.css";
// import { useState, useReducer } from "react";
import Form from "./components/Form";
import StudentSection from "./components/StudentSection";

// const reducer = (counterState, action) => {
//   switch (action.type) {
//     case "INCREASE_BY_ONE": {
//       return counterState + action.payload;
//     }

//     case "DECREASE_BY_ONE": {
//       return counterState - action.payload;
//     }

//     default:
//       return counterState;
//   }
// };

const App = () => {
  // const [counter, dispatch] = useReducer(reducer, 100);
  return (
    <div className="App">
      <Form />
      <StudentSection />
      {/* <h2>The value is {counter}</h2>
      <button onClick={() => dispatch({ type: "INCREASE_BY_ONE", payload: 5 })}>
        Press to increase
      </button>
      <button onClick={() => dispatch({ type: "DECREASE_BY_ONE", payload: 5 })}>
        Press to decrease
      </button> */}
    </div>
  );
};

export default App;
