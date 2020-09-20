import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
    <h1>Mo Ziauddin</h1>
    <p>I am a developer learning React</p>
    <ol>
    <li>Games</li>
    <li>Books</li>
    <li>Sports</li>
    </ol>
    </div>
  );
}

ReactDOM.render(
  <MyInfo />, document.getElementById("root")
)