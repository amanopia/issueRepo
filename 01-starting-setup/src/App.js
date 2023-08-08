import Expenses from "./components/Expenses/Expenses";
import React from "react";
function App() {
  return (
    // this is the end state of the application that I want to see this
    // <div>
    //   <Expenses items={expenses[0]}></Expenses>
    // </div>
    <div>
      <Expenses ></Expenses>
    </div>
    // React.createElement(
    //   "div", //? div here is the wrapper root jsx element
    //   {},
    //   React.createElement("h2", {}, "Let's get started"),
    //   // React.createElement(Expenses, {item: expenses[0]}, )
    //   React.createElement(Expenses, {})
    // )
  );
}

export default App;
