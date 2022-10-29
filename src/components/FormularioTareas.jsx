import React from 'react'
import { useState } from 'react';
import '../styles/formulario_tareas.css';

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
    <form className='container2' onSubmit={HandleSubmit}>
        <input className='form_input' type="text" placeholder='Escribe una tarea...' value={input} onChange={(e)=>setInput(e.target.value)} required />
        <input className='form_btn' type="submit" value='Agregar Tarea'/>
    </form>
  )
}

export default FormularioTareas