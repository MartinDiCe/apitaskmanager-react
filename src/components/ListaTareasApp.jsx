import React from 'react'
import FormularioTareas from './FormularioTareas'
import { useState,useEffect } from 'react';
import Tarea from './Tarea';
import  Client  from '../service/Client';

function ListaTareasApp() {

  const [tareas, setTareas] = useState([]);

  let client = new Client();

  const getTasks = async ()=>{
    let axios = await client.getTasks();
    setTareas(axios);
  }

  useEffect(() => {
    getTasks();
  }, [tareas])

  const agregarTarea = (tarea)=>{
    client.postTasks(tarea);
    let nuevaTarea = [...tareas,tarea];
    setTareas(nuevaTarea);
  }

  const eliminarTarea = (id)=>{
    client.delTasks(id);
    const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id);
    setTareas(tareasActualizadas);
    }

  const completarTarea = (id)=>{
      
      client.patchTask(id);
      const tareasActualizadas = tareas.map(tarea=>{

        if(tarea.id === id){
          tarea.completed = !tarea.completed;
        }
        return tarea
      })

      setTareas(tareasActualizadas);
  }

  return (
    <div>
       <h2>TaskManager</h2> 
      <FormularioTareas agregarTarea={agregarTarea}/>
      <div className='contenedor-tareas'>
          
          {/* {tareas.map((tarea) =>
            <Tarea 
            texto={tarea.texto}
            key={tarea.id}
            id={tarea.id}
            completada={tarea.completada}
            completarTarea ={completarTarea}
            eliminarTarea={eliminarTarea}
          ></Tarea>)} */}

           {tareas.length === 0 ? <h2>Datos no encontrados</h2> :
           tareas.map((tarea) =>
            <Tarea 
            titulo={tarea.title}
            descripcion={tarea.description}
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