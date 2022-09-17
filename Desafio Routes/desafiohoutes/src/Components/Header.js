import React from 'react'
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className={styles.header}>
            <ul>
                <li>
                    <NavLink activeClassName={styles.active} className={styles.link} to='/' end>Produto</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} className={styles.link} to='contato'>Contato</NavLink>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default Header