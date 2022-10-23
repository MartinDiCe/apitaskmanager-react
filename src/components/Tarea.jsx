import React from 'react'
import './tarea.css'

function Tarea({id,texto,completada,noCompletada}) {
  return (
    <div className='tarea'>
        {texto}
        <h2>Estado de tarea:{completada}</h2>
    </div>
  )
}

export default Tarea