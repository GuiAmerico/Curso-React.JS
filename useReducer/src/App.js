import React from 'react'
function App() {
  function reducer(state, action){
    if(action === 'aumentar'){
      return state + 1;
    }else if(action === 'diminuir'){
      return state - 1;
    }
    return new Error('Action não existe');
  }
  const [state, dispatch] = React.useReducer(reducer, 0);


  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <p>{state}</p>

    </div>
  );
}

export default App;
