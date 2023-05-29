import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {
  // creamos un clase que contiente codigo javascript cremos que cambie el color de background a funcion de si es un oprador o es un numero
  // 1/ necesitamos template string para que  cadena de caracteres que puede contener ciertos codigos javascript ,
  //2 todos los botons tiene misma clase que hemos creado que se llama"boton-contenedor" asi que tendran mismo estilo y propiedades de css igual, PARA poder comprobar que si el valor de children es un operador definimos un funcion, Si el valor de children sea un operdaor +/-/* / necesitaremos de
  //3 agregar un nuevo clase que se llamara "operador" si no es un operador sera null

  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
}
export default Boton;
