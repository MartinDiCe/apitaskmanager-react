import React from 'react'
import '../styles/tarea.css'

function Tarea({titulo,descripcion,id,completada,completarTarea,eliminarTarea}) {

  return (
<<<<<<< HEAD
    <div>
       <div onClick={!completada ? ()=>completarTarea(id) : undefined} className={completada ? 'completado' : 'incompleto'}>{`${titulo}: ${descripcion}`}</div>
       <button onClick={()=>eliminarTarea(id)}>Eliminar Tarea</button> 
     </div>
=======
    <div className='tarea'>
      <div onClick={()=>completarTarea(id)} className={completada ? 'completado tarea-container' : 'incompleto tarea-container'}>{texto}</div>
      <button className='tarea-btn' onClick={()=>eliminarTarea(id)}>Borrar</button> 
    </div>
>>>>>>> dev
  )
  
}

export default Tarea