import React from 'react';

const Arrays01 = () => {
    
    const produtos01 = ['Celular', 'Geladeira', 'Microondas'];
    const produtos02 = [<li key='k1'>Carro</li>, <li key='k2'>Casa</li>];
    const filmes = ['101 Dalmatas', 'Flash', 'Os Vingadores'];
    const livros = [
        {nome: 'Diário de um banana', ano: 2000},
        {nome: 'A Game of Thrones', ano: 1998},
        {nome: 'Dom Quixote', ano: 2003},
    ]

    return(
        <div>
            <br/>
            <br/>
            <br/>

            {produtos01}
            <ul>
                {produtos02}
            </ul>
            <br/>
            <ul>
                {filmes.map(filme => <li key={filme}>{filme}</li>)}
            </ul>
            <br/>
            <ul>
                {livros.map(({nome, ano}) => <li key={nome}>{nome},{ano}</li>)}
            </ul>
            
        </div>
    )
}

export default Arrays01;