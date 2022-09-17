import React from 'react';
//import Contato from './Contato';
const Contato = React.lazy(() => import('./Contato'))
function App() {
  const [ativo, setAtivo] = useState(false);


  return (
    <div>
     {ativo && <React.Suspense fallback={<p>Carregando...</p>}>
      <Contato />

     </React.Suspense>}
     <button onClick={setAtivo(!ativo)}>Ativar</button>
    </div>
  );
}

export default App;
