import React from 'react'
import Card from 'react-bootstrap/Card'

function App() {
  return (
    <div>
    <div className='card bg-dark text-white m-5'>
      <div className='card-header'>Nootebook</div>
      <div className='card-body'>
        <h5 className='card-title'>R$ 2500</h5>
        <p className='card-text'>lorem ipsum</p>
      </div>
    </div>
      
      
      
      <Card bg='dark' text='white' className='m-5'>
        <Card.Header>Celular</Card.Header>
        <Card.Body>
          <Card.Title>R$ 1800</Card.Title>
          <Card.Text>LOREM IPSUM</Card.Text>
        </Card.Body>
      </Card>

    </div>


  );
}

export default App;
