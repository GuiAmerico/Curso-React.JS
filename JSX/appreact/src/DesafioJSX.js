import React from 'react';
import ReactDOM from 'react-dom';


const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 1500'}
    ],
    ativa: true
};
const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 1500'},
        {nome: 'Guitarra', preco: 'R$ 3500'}
    ],
    ativa: false
};

const DesafioJSX = () => {
    const dados = mario;
    const compras = dados.compras;
    const total = compras.map(c => c.preco).map(p => p.replace('R$ ', '')).map(p => parseInt(p)).reduce((x,y) => x+y)

    return (
        <div>
            <br/>
            <br/>
            <br/>
            
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: <span  style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'ativo' : 'inativo'}</span></p>
            <p>Total Gasto: {total}</p>
            {total > 10000 ? <p>Tá gastando muito</p> : null}
        </div>
    )
    
}

export default DesafioJSX;