import React from 'react';
import Form from './Form/Form';
const Titulo = (props) => {
    return <h1 style={{color:props.cor}}>{props.texto}</h1>
}
const Paragrafo = ({paragrafo,children}) => {
  return <p> {paragrafo},{children} </p>
}



function App() {
  return (
    <div >
      <Titulo cor='red' texto='Propiedade'/>
      <Paragrafo paragrafo='children'>Isso é o children</Paragrafo>
      <Form />
    </div>
  );
}

export default App;
