import React from "react";
import Checkbox from "./Form/Checkbox";

function App() {
  const [linguagens, setLinguagens] = React.useState([]);
  return (
    <div>
      <Checkbox option={['Java', 'PHP', 'JavaScript']} value={linguagens} setValue={setLinguagens}/>
    </div>
  );
}

export default App;
