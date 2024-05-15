import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1> IVORY DENTAL CARE </h1>
        <button className='next-button' onClick={() => navigate('/details')}>Next</button>
      </header>
    </div>
  );
}

export default App;
