import React from "react";

const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['blue', 'black', 'red']
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['yellow', 'red', 'orange']
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['green', 'blue', 'pink']
    }
    
]

const Arrays02 = () => {
    const dados = produtos.filter(({preco}) => Number(preco.replace("R$ ", "") > 1500));
    
    console.log(dados);
    return(
        <>
            {dados.map(({id,nome,preco,cores}) => (
                <div key={id}>
                    <h1>{nome}</h1>
                    <p>{preco}</p>
                    <ul>
                        {cores.map(cor => <li style={{backgroundColor:cor, color:'white'}} key={cor}>{cor}</li>)}
                    </ul>
                </div>
            ))}
        </>
    );
}

export default Arrays02;