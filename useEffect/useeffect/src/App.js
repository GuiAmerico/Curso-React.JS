import React from 'react';
import App2 from './App2';
import Produto from './Produto';

function App() {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then(response => response.json()).then(json => setDados(json));
  }, [])

  React.useEffect(() => {document.title = 'Total ' + contar}, [contar])
  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      {dados && 
      <>
        <h1>{dados.nome}</h1>
        <p>{dados.preco * contar}</p>
      </>}
      <br/>
      <br/>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Desativar' : 'Ativar'}</button>
      <br/>
      <br/>
      
      <App2 />
    </div>
  );
}

export default App;
