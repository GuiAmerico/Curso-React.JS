import React from 'react'
import Produto from './Produto';
import UserContext from './UserContext';
import {GlobalStorage} from './GlobalContext'

function App() {
  return (
    <GlobalStorage><Produto/></GlobalStorage>
    //<UserContext.Provider value={{nome: 'Guilherme'}}>
      //<Produto />
    //</UserContext.Provider>

  );
}

export default App;
