import React from 'react'
import FormularioTareas from './FormularioTareas'
import { useState,useEffect } from 'react';
import Tarea from './Tarea';
import  Client  from '../service/Client';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import '../styles/lista_tareas_app.css'


function ListaTareasApp() {

  const [tareas, setTareas] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  let client = new Client();

  useEffect(() => {
    client.getTasks(setLoading,setError,setTareas);
  }, [])

  const agregarTarea = (tarea)=>{
    client.postTasks(tarea,tareas,setTareas,setError);
  }

  const eliminarTarea = (id)=>{
    
    let bool = window.confirm('Esta seguro de que desea eliminar la tarea?');

    if(bool){
      client.delTasks(id,setError);
      const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id);
      setTareas(tareasActualizadas);
      alert('Eliminado con exito!')
    }
  }

  const completarTarea = (id)=>{
      client.patchTask(id,setError);

      const tareasActualizadas = tareas.map(tarea=>{
        if(tarea.id === id){
          if(tarea.completed !== true){
            tarea.completed = true;
          }
        }
        return tarea
      })
      setTareas(tareasActualizadas);
  }

  return (
    <div className='task-manager_container' >
      <h2>Lista De Tareas</h2>
      <FormularioTareas agregarTarea={agregarTarea}/>
      <div className='contenedor-tareas'>
        {loading ? <Loader></Loader>: undefined}
        {error ? <ErrorMessage error={error}></ErrorMessage>: undefined}
           {tareas.length === 0 ? <h2>Datos no encontrados</h2> :
           tareas.map((tarea) =>
            <Tarea 
            titulo={tarea.title}
            descripcion={tarea.description}
            fechaCreada={tarea.createDate}
            fechaEstimada={tarea.estimatedDate}
            key={tarea.id}
            id={tarea.id}
            completada={tarea.completed}
            completarTarea ={completarTarea}
            eliminarTarea={eliminarTarea}
          ></Tarea>)}
      </div>
    </div>
  )
}

export default ListaTareasApp