import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';
function App() {
  const [ativo, setAtivo] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  return (
    <div>
      <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <ButtonModal setModal={setModal}/>
      <div>
        
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal}/>
      </div>
    </div>
  );
}

export default App;
