import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';
import Produto from './Produto';

function App() {
//  let ativo = true;
  
const ativoHook = React.useState(false);
  //const ativoValor = ativoHook[0];
  //const atualizaValor = ativoHook[1];
  
  const [ativo, setAtivo]  = React.useState(false);
  const [dados, setDados] = React.useState({nome:'Gui', idade: 18})
  const handleClick = () => {
        setAtivo(!ativo)
        setDados({...dados, faculdade: 'ADS'});

      }
      
        const [info, setInfo] = React.useState(null);
        const [carregando, setCarregando] = React.useState(null)

     async function handleClick2(event) {
      setCarregando(true);  
      const response = fetch
        (`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`).then()

        const json = await response.json
        console.log(response);
        setInfo(json)
        setCarregando(false);
      }
  const [modal, setModal] = React.useState(false);

  return (
    <div >
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>

      <br/>
      <p>{modal ? 'Ativo' : 'Inativo'}</p>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal} />
      <br/><br/><br/><br/>
      
      {carregando && <p>carregando...</p>}
      <button onClick={handleClick2}>notebook</button>
      <button onClick={handleClick2}>smartphone</button>
      <button onClick={handleClick2}>tablet</button>
      {!carregando && info && <Produto dados={info}/>}
    </div>
  );
}

export default App;
