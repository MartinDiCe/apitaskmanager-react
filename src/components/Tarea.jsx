import React from 'react'
import '../styles/tarea.css'
import {BsFillCheckCircleFill} from 'react-icons/bs' //completo
import {BsFillXCircleFill} from 'react-icons/bs'  //incompleto
import {AiFillDelete} from 'react-icons/ai'    //delete
import {BsCaretDownFill} from 'react-icons/bs'   
import {BsCaretRightFill} from 'react-icons/bs'   

function Tarea({titulo,descripcion,id,completada,completarTarea,eliminarTarea}) {

  return (
    <div className='tarea'>
      <BsCaretRightFill className='open-btn'></BsCaretRightFill>
        <div onClick={!completada ? ()=>completarTarea(id) : undefined} className={completada ? 'completado tarea-container' : 'incompleto tarea-container'}>
          {`${titulo}`} { completada === true
          ? <BsFillCheckCircleFill className='completado'></BsFillCheckCircleFill> //Icono true
          : <BsFillXCircleFill className='incompleto'></BsFillXCircleFill>//Icono False
          }
        </div>
       <button className='tarea-btn' onClick={()=>eliminarTarea(id)}>{<AiFillDelete></AiFillDelete>}</button> 
     </div>
  )
  
}

export default Tarea