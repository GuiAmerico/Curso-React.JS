import React from 'react';


function App() {
  const [produto, setProduto] = React.useState('');

  function handleChange({target}){
    setProduto(target.value);
  }

  return (
    <form>
      <label>
        <input type='radio' onChange={handleClick} value='smartphone' name='produto'/>
        Smartphone
      </label>
      <label>
        <input type='radio' onChange={handleClick} value='notebook' name='produto'/>
        Notebook
      </label>
    </form>
  );
}

export default App;
