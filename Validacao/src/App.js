import React from 'react';
import Input from './Form/Input';

function App() {
  const cep = React.useForm('cep');

  function handleSubmit(event){
    event.preventDefault();
    if(cep.validate()) console.log('enviou') 

  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label='CEP' id='cep' type='text' 
      {...cep} onChange={handleChange} placeholder='00000-000' onBlur={handleBlur}/>
      {error && <p>{error}</p>}
      <button>ENVIAR</button>
    </form>
  );
}

export default App;
