import logo from './logo.svg';
import './App.css';

function App() {
  const [textarea, setTextarea] = React.useState('');
  return (
    <div>
      <textarea value={textarea} onChange={({target}) => setTextarea(target.value)}/>
    </div>
  );
}

export default App;
