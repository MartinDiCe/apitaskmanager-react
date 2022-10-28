import React, { useEffect } from 'react'
import { useState } from 'react';

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
    <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='Ingrese un titulo' value={titulo} onChange={(e)=>setTitulo(e.target.value)} required />
        <input type="text" placeholder='Ingrese una descripcion' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} required/>
        <input type="submit" value='Agregar una tarea'/>
    </form>
  )
}

export default FormularioTareas