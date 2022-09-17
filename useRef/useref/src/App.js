import React from "react";

function App() {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  const [carrinho,setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  
  function handleClick(){
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  function handleClick2(){
    clearTimeout(timeoutRef.current);
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado');
    timeoutRef.current = setTimeout(() => setNotificacao(null), 2000);
  }
  return (
    <div>
      <ul>
        {comentarios.map(comentario => <li key={comentario}>{comentario}</li>)}
      </ul>
        <input type='text' ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/>
        <button onClick={handleClick}>Enviar</button>
        <br/><br/><br/>
        <button onClick={handleClick2}>Add Carrinho {carrinho}</button>
        <p>{notificacao}</p>
    </div>
  );
}

export default App;
