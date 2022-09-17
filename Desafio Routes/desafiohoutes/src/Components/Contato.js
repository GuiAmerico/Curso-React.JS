import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/img.jpg'
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
        <Head title='Renek | Contato' description='Entre em Contato'/>
        <img src={foto} alt='Máquina de escrever'/>
        <div>
            <h1>Entre em Contato</h1>
            <ul className={styles.dados}>
                <li>gui123@email.com</li>
                <li>99999 9999</li>
                <li>Rua Logo Ali, 00</li>
            </ul>
        </div>

    </section>
  )
}

export default Contato