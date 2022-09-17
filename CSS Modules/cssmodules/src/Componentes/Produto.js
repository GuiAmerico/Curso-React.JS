import React from 'react'
import styles from './Produto.modules.css'

const Produto = () => {
  return (
    <div>
        <h1 className={styles.titulo}>Notebook</h1>
        <p>Preco: R$2000</p>
        <button>COMPRAR</button>
    </div>
  )
}

export default Produto