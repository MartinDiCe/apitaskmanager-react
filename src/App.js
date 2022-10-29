import { Column, DataTable } from 'primereact';
import { Component } from 'react';
import ListaTareasApp from './components/ListaTareasApp.jsx';
import './styles/app.css'
// import { TaskService } from './service/TaskService';

//creamos el main app y extendemos del componente
export default class App extends Component{
  //creamos un constructor
  constructor(){
    //primero llamamos al constructor superior (clas padre)
    super();
    this.state = {};
    //llamamos a nuestro taskservice
    this.taskService = new TaskService();
  }
//Metodos de ciclo de vida
componentDidMount(){
this.taskService.getTasks().then(data => this.setState({tasks: data}))
}

//Implementaremos las libreria de la plantilla primereact (metodo render)

render()
{
  return(
    <div className='background'>
        <ListaTareasApp></ListaTareasApp>
    </div>
  );
}

}


