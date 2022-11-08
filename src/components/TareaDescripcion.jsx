import React from "react";
import "../styles/tarea-descripcion.css";

function TareaDescripcion({
  titulo,
  descripcion,
  fechaCreada,
  fechaEstimada,
  completada,
  id,
  isOpen,
}) {
  return (
    <p className={isOpen ? "descripcion descripcion-open" : "descripcion"}>
      <table className="descripcion-table">
        <tbody>
          <tr>
            TITULO
            <td>{titulo}</td>
          </tr>
          <tr>
            DESCRIPCION
            <td>{descripcion}</td>
          </tr>
          <tr>
            ID
            <td>{id}</td>
          </tr>
          <tr>
            FECHA DE CREACION
            <td>{fechaCreada}</td>
          </tr>
          <tr>
            FECHA DE FINALIZACION
            <td>{fechaEstimada ? fechaEstimada : "Sin Datos"}</td>
          </tr>
          <tr>
            TAREA COMPLETADA
            <td>{completada ? "Completada" : "Incompleta"}</td>
          </tr>
        </tbody>
      </table>
    </p>
  );
}

export default TareaDescripcion;
