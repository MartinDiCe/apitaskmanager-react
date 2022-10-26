import React from 'react'
import { useState } from 'react';

function FormularioTareas({agregarTarea}) {

    const [input, setInput] = useState('');

    const HandleSubmit = (e) =>{
        e.preventDefault();
        let nuevaTarea = {
            id:new Date().getTime(),
            texto:input,
            completada:false
        }
        agregarTarea(nuevaTarea);
        ResetInput();
    }
    const ResetInput = (e)=> setInput('');

  return (
    <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='Escribe una tarea' value={input} onChange={(e)=>setInput(e.target.value)} required />
        <input type="submit" value='Agregar una tarea'/>
    </form>
  )
}

export default FormularioTareas