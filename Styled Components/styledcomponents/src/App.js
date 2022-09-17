import React from "react";
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 2rem;
  color: aliceblue;
`

const Paragrafo = styled.p`
  font-weight: bold;
`
const Preco = styled.p`
  background: ${({cor}) => cor};
`
function App() {
  return (
    <div>
      <Titulo>Meu Titulo</Titulo>
      <Paragrafo>Meu Paragrafo</Paragrafo>
      <Preco cor='pink'>R$2000</Preco>
    </div>
  );
}

export default App;
