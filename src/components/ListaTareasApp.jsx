import React from 'react'
import FormularioTareas from './FormularioTareas'
import { useState } from 'react';
import Tarea from './Tarea';

function ListaTareasApp({tasks}) {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea)=>{
    let nuevaTarea = [...tareas,tarea];
    setTareas(nuevaTarea);
  }

  const eliminarTarea = (id)=>{
    const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id);
    setTareas(tareasActualizadas);
    }

  const completarTarea = (id)=>{
  
      const tareasActualizadas = tareas.map(tarea=>{

        if(tarea.id === id){
          tarea.completada = !tarea.completada;
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
           {tasks.map((tarea) =>
            <Tarea 
            texto={tarea.description}
            key={tarea.id}
            id={tarea.id}
            completada={tarea.completed}
            // completarTarea ={completarTarea}
            // eliminarTarea={eliminarTarea}
          ></Tarea>)}
      </div>
    </div>
  )
}

export default ListaTareasApp