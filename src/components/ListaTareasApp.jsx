import React from 'react'
import FormularioTareas from './FormularioTareas'
import { useState } from 'react';
import Tarea from './Tarea';
import '../styles/lista_tareas_app.css';

function ListaTareasApp() {

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
    <div className='container'>
      <h2>Lista De Tareas</h2>
      <FormularioTareas agregarTarea={agregarTarea}/>
      <div className='contenedor-tareas'>
          {tareas.map((tarea) =>
            <Tarea 
            texto={tarea.texto}
            key={tarea.id}
            id={tarea.id}
            completada={tarea.completada}
            completarTarea ={completarTarea}
            eliminarTarea={eliminarTarea}
          ></Tarea>)}
      </div>
    </div>
  )
}

export default ListaTareasApp