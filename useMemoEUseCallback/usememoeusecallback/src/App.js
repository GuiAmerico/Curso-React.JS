import React from "react";

//const operacaoLenta = () => {
//  let c;
//  for(let i = 0; i < 10000000; i++){
//    c = i + i / 10
//  }
//  return c;
//}

function App() {
  const [contar, setContar] = React.useState(0);
//  const valor = React.useMemo(() => {
//    const localItem = window.localStorage.getItem('produto');
//    console.log('aconteceu o nemo');
//    return localItem;
//  }, [])
  
//  const t1 = performance.now();
//  const valor = React.useMemo(() => operacaoLenta(), [])
//  console.log(performance.now() - t1);
const handleClick = React.useCallback(() => {
  setContar((contar) => contar + 1);
}, []);
return (
    <div>
        <button onClick={() =>setContar(contar + 1)}>{contar}</button> 
        <button onClick={handleClick}>{contar}</button>  
    </div>
  );
}

export default App;
