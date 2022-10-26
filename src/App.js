import {React,useState,useEffect} from 'react';
import ListaTareasApp from './components/ListaTareasApp.jsx';
import  Client  from './service/Client';



export default function App() {

  const [tasks, setTasks] = useState([]);

  const getTasks = async ()=>{
    let axios = await new Client().getTasks();
    setTasks(axios);
  }

  useEffect(() => {
    getTasks();
  }, [])
  

  return (
    <div>
    <ListaTareasApp tasks={tasks}></ListaTareasApp>
    </div>
  )
}



