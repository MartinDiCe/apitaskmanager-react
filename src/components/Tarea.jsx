import React from 'react'
import '../styles/tarea.css'

function Tarea({texto,id,completada,completarTarea,eliminarTarea}) {

  return (
    <div>
       <div onClick={()=>completarTarea(id)} className={completada ? 'completado' : 'incompleto'}>{texto}</div>
       <button onClick={()=>eliminarTarea(id)}>Eliminar Tarea</button> 
     </div>
  )
}

export default Tarea