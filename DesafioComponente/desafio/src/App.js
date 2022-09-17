import React from 'react';
import Home from './Home';
import Link from './Link';
import Produtos from './Produtos';


function App() {
  const {pathname} = window.location;
  let Pagina = Home;
  if(pathname === '/produtos'){
    Pagina = Produtos
  }

  return (
    <div >
     <Link />
      <Pagina />
    </div>
  );
}

export default App;
