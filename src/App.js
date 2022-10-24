import { Column, DataTable } from 'primereact';
import { Component } from 'react';
import './App.css';
import { TaskService } from './service/TaskService';

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
render(){
  return(
  <DataTable value={this.state.tasks}>
    <Column field="id" header="ID"></Column>
    <Column field="title" header="TITLE"></Column>
    <Column field="description" header="DESCRIPTION"></Column>
    <Column field="createDate" header="CREATE DATE"></Column>
    <Column field="estimatedDate" header="ESTIMATED DATE"></Column>
    <Column field="finalizationDate" header="FINALIZATION DATE"></Column>
    <Column field="complete" header="COMPLETED"></Column>
    <Column field="taskStatus" header="STATUS"></Column>
  </DataTable>
  );
}
}

