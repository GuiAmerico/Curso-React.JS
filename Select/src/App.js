import React from 'react';


function App() {
  const [select, setSelect] = React.useState('');
  
  return (
    <form >
     <select value={select} onChange={({target}) => setSelect(target.value)} id='produtos'>
      <option value='notebook'>Notebook</option>
      <option value='smartphone' >Smartphone</option>
      <option value='tablet'>Tablet</option>
     </select>
    </form>
  );
}

export default App;
