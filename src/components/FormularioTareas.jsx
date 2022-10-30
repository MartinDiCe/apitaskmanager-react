import React, { useEffect } from 'react'
import { useState } from 'react';
import '../styles/formulario_tareas.css';

function FormularioTareas({agregarTarea}) {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const HandleSubmit = (e) =>{
        e.preventDefault();
        let nuevaTarea = {
            description:descripcion,
            title:titulo,
        }
        agregarTarea(nuevaTarea);
        ResetInput();
    }
    const ResetInput = (e)=> {
      setTitulo('');
      setDescripcion('');
    }

  return (
<<<<<<< HEAD
    <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='Ingrese un titulo' value={titulo} onChange={(e)=>setTitulo(e.target.value)} required />
        <input type="text" placeholder='Ingrese una descripcion' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} required/>
        <input type="submit" value='Agregar una tarea'/>
=======
    <form className='container2' onSubmit={HandleSubmit}>
        <input className='form_input' type="text" placeholder='Escribe una tarea...' value={input} onChange={(e)=>setInput(e.target.value)} required />
        <input className='form_btn' type="submit" value='Agregar Tarea'/>
>>>>>>> dev
    </form>
  )
}

export default FormularioTareas