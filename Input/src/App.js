import React from "react";
import App2 from "./App2";

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  
  function handleSubmit(event){
    event.preventDefault();
    console.log(event)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome01'>Nome</label>
      <input type='text' id='nome01' name='nome' value={nome} onChange={(event) => setNome(event.target.value)}/>
      <br/>
      <label htmlFor='email01'>Email</label>
      <input type='email' id='email01' name='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
      <button>Enviar</button>
      <br/><br/><br/><br/>
      <App2 />
    </form>

    </div>
  );
}

export default App;
