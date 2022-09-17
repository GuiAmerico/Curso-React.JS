import React from "react";

function App() {
  const handleClick = (event) => {
    console.log(event.target)
  }
  return (
    <div >
      <button onClick={handleClick} onMouseMove={handleClick}>CLICK</button>
    </div>
  );
}

export default App;
