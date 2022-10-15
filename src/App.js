import { useState } from 'react';
import './App.css';
import data from './data.json'

function App() {

  const [Tasks, setTasks] = useState(data);

  console.log(Tasks)

  return (
    <div className="container">
      Tittle
    </div>
  );
}

export default App;
