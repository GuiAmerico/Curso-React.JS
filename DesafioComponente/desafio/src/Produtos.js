import React from 'react'

const Produtos = () => {
  const produtos = [
    {nome: 'Notebook', propriedades:['16gb ram', '512gb']},
    {nome: 'Smartphone', propriedades:['4gb ram', '64gb']}
  ]
  return (
    <>
        <h1 style={{color: 'green'}}>Produtos</h1>
        {produtos.map(({nome, propriedades}) => (
            <div key={nome} style={{border: '1px solid red'}}>
                <h3>{nome}</h3>
                <ul>
                    {propriedades.map(prop => <li key={prop}>{prop}</li>)}
                </ul>
            </div>
        ))}
    </>
  )
}

export default Produtos