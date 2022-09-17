import React from 'react'

const Modal = ({modal, setModal}) => {
if(modal === true)
  return (
    <div>
        Modal Aberto
        <button onClick={() => setModal(false)}>Fechar</button>
    </div>
  );
  return null;
}

export default Modal