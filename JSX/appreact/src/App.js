import React from 'react';
const App = () => {
  const nome = 'Gui';
  const estilo = {
    color: 'red',
    fontSize: '1.8rem',
    fontFamily: 'Arial'
  }
  return (
    <div>
      <a className='ativo' href='#'>JSX</a>
      <br/>
      <label htmlFor='nome'>Nome</label>
      <input type='text' id='nome'/>
      <p style={estilo}>{nome}</p>
      <p style={{color: 'blue'}}>SIIIIIIII</p>
    </div>
  );
}

export default App;
