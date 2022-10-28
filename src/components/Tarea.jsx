import React from 'react'
import '../styles/tarea.css'

function Tarea({titulo,descripcion,id,completada,completarTarea,eliminarTarea}) {

  return (
    <div>
       <div onClick={!completada ? ()=>completarTarea(id) : undefined} className={completada ? 'completado' : 'incompleto'}>{`${titulo}: ${descripcion}`}</div>
       <button onClick={()=>eliminarTarea(id)}>Eliminar Tarea</button> 
     </div>
  )
}

export default Tarea