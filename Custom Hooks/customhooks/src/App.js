import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

function App() {
  const [produto, setProduto] = useLocalStorage('produto','')
  const {request,data, loading, error} = useFetch();
  function handleClick({target}) {
    setProduto(target.innerText);
  }
  React.useEffect(() => {
    async function fetchData(){
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
    }

    fetchData();
      
  },[request])
  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>
  if (data)
    return (
      <div>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <br/><br/><br/>

        {data.map((produto) => <div key={produto.id}><h1>{produto.nome}</h1></div>)}
      </div>
  );
  else return null;
}

export default App;
