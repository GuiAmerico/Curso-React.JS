import React from "react";
import Select from "./Form/Select";

function App() {

  const [produto, setProduto] = React.useState('');

  return (

    <div>
      <Select options={['smartphone', 'tablet',]} value={produto} setValue={setProduto}/>
    </div>
  );
}

export default App;
