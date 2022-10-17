import { Component } from 'react';
import './App.css';
import { TaskService } from './service/TaskService';

//creamos el main app y extendemos del componente
export default class App extends Component{
  //creamos un constructor
  constructor(){
    //primero llamamos al constructor superior (clas padre)
    super();
    this.setState({
      //aca listamos a las tareas
      tasks: []  
    });
    this.state = {};
    //llamamos a nuestro taskservice
    this.taskService = new TaskService();
  }
//Metodos de ciclo de vida
componentDidMount(){
this.taskService.getTasks().then(data => {
  console.log(data);
})
}

//Implementaremos las libreria de la plantilla primereact (metodo render)
render(){
  return(
  <h1>Hola mundo</h1>
  );
}
}

