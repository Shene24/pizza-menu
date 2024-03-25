import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Pizza />
    </div>
  );
}

//we write function for creating new component
function Pizza() {
  return <h2>My favorite pizza is: </h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
