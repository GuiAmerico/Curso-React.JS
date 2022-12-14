import React from 'react'

const App2 = () => {
    const [produto, setProduto] = React.useState(null);
    
    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem('produto');
        if(produtoLocal != null) setProduto(produtoLocal)
    }, [])
    
    React.useEffect(() => {
       if(produto != null) window.localStorage.setItem('produto', produto);
    }, [produto])
    
    function handleClick({target}) {
        setProduto(target.innerText)
    }

    
    return (
    <div>
        <h1>PreferĂȘncia: {produto}</h1>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default App2