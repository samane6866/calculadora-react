import React from "react";
import "../hojas-de-estilo/BotonClear.css";


const BotonClear = (props,children) => (
    <div className="boton-clear" onClick={props.manejarClear}>

{props.children}

    </div>




)
export default BotonClear;