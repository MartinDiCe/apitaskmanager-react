import React from 'react'
import '../styles/tarea.css'

function Tarea({texto,id,completada,completarTarea,eliminarTarea}) {

  return (
    <div className='tarea'>
      <div onClick={()=>completarTarea(id)} className={completada ? 'completado tarea-container' : 'incompleto tarea-container'}>{texto}</div>
      <button className='tarea-btn' onClick={()=>eliminarTarea(id)}>Borrar</button> 
    </div>
  )
  
}

export default Tarea