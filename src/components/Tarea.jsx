import React from "react";
import { AiFillDelete as IconoBorrar } from "react-icons/ai"; //delete
import {
  BsCaretRightFill as IconoFlechaArriba,
  BsFillCheckCircleFill as IconoCompleto,
  BsFillXCircleFill as IconoIncompleto,
  BsCaretDownFill as IconoFlechaAbajo,
} from "react-icons/bs"; //completo
import "../styles/tarea.css";

import { useState } from "react";
import TareaDescripcion from "./TareaDescripcion";

function Tarea({
  titulo,
  descripcion,
  id,
  completada,
  completarTarea,
  eliminarTarea,
  fechaCreada,
  fechaEstimada,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="tarea">
        <div className="tarea-container">
          {
            //CONTENEDOR DE FLECHA
            isOpen === true ? (
              <>
                <IconoFlechaAbajo
                  className="flecha-btn"
                  onClick={() => setIsOpen(false)}
                ></IconoFlechaAbajo>
              </>
            ) : (
              <IconoFlechaArriba
                className="flecha-btn"
                onClick={() => setIsOpen(true)}
              ></IconoFlechaArriba>
            )
          }

          {
            //CONTENEDOR TAREA TEXTO/DESCRIPCION
            <p className="tarea-titulo">{titulo}</p>
          }

          {
            //CONTENEDOR COMPLETADO / NO COMPLETADO
            completada === true ? (
              <IconoCompleto
                onClick={!completada ? () => completarTarea(id) : undefined}
                className="icono-chequeador completado"
              ></IconoCompleto>
            ) : (
              <IconoIncompleto
                onClick={!completada ? () => completarTarea(id) : undefined}
                className="icono-chequeador incompleto"
              ></IconoIncompleto>
            )
          }
        </div>

        <button
          className="tarea-eliminar-btn"
          onClick={() => eliminarTarea(id)}
        >
          {<IconoBorrar></IconoBorrar>}
        </button>
      </div>
      <TareaDescripcion
        isOpen={isOpen}
        titulo={titulo}
        descripcion={descripcion}
        id={id}
        completada={completada}
        fechaCreada={fechaCreada}
        fechaEstimada={fechaEstimada}
      />
    </>
  );
}

export default Tarea;
