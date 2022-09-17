import React from 'react';
import Input from './Form/Input';

function App() {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null)

  function validateCep(value){
    if(value.length === 0){
      setError('Preencha um valor')
    }else if(!/^\d{5}-?\d{3}$/.test(value)){
      setError('Preecha um CEP válido')
    }else{
      setError(null);
      return true;
    }
  }  

  function handleBlur({target}){
    validateCep(target.value)
  }

  function handleChange({target}){
    if(error) validateCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    if(validateCep(cep)) console.log('enviou') 
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label='CEP' id='cep' type='text' 
      value={cep} onChange={handleChange} placeholder='00000-000' onBlur={handleBlur}/>
      {error && <p>{error}</p>}
      <button>ENVIAR</button>
    </form>
  );
}

export default App;
