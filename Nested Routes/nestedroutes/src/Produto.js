import React from 'react'
import { useLocation, useParams, Routes, Route, NavLink } from 'react-router-dom';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {
    const params = useParams();
    const location = useLocation();
    const search = new URLSearchParams(location.search);
  return (
    <div>
      Produto: {params.id}
      <nav>
        <NavLink to=''>Descricao</NavLink>
        <NavLink to='avaliacao'>Avaliacao</NavLink>
        <NavLink to='customizado'>Customizado</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<ProdutoDescricao/>}/>
        <Route path='avaliacao' element={<ProdutoAvaliacao/>}/>
        <Route path='customizado' element={<ProdutoCustomizado/>}/>
      </Routes>
    </div>

  )
}

export default Produto