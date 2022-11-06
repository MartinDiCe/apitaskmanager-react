import React, { useEffect } from 'react'
import { useState } from 'react';
import '../styles/formulario_tareas.css';
import {BsPlusSquareFill} from 'react-icons/bs'


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
    <form className='form-container' onSubmit={HandleSubmit}>
      <div className='input-container'>
        <input maxLength='50' className='form-input' type="text" placeholder='Título' value={titulo} onChange={(e)=>setTitulo(e.target.value)} required />
        <input maxLength='120' className='form-input' type="text" placeholder='Descripción' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} required/>
        {/* <input className='form-input' type="text" placeholder='Ingrese Fecha estimada'/> */}
      </div>
        <button className='form-btn'><BsPlusSquareFill className='btn-icon'></BsPlusSquareFill></button>
    </form>
  )
}

export default FormularioTareas