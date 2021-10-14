import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [ apiStatus, setApiStatus ] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}ping`)
    .then((res) => res.json())
    .then((json) => setApiStatus(json.data))
    .catch((err) => {
      console.log('Error', err);
    })
  }, []);

  return (
    <div className="App">
      <h1>React express starter project!</h1>
      <h3>{apiStatus}</h3>
    </div>
  );
}

export default App;
