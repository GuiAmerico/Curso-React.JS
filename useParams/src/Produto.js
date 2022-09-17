import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
    const params = useParams();
    const location = useLocation();
    const search = new URLSearchParams(location.search);
  return (
    <div>Produto: {params.id}</div>
  )
}

export default Produto