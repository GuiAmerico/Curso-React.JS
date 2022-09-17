import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      Home
      <NavLink to='/produto/notebook'>Notebook</NavLink>{' '}
      <NavLink to='/produto/smartphone'>Smartphone</NavLink>
    </div>
  )
}

export default Home