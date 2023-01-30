import React from 'react'
import { useState } from 'react';

export const PrimerComponente = () => {

    //let nombre = "Armando";
    let github = "https://github.com/ArmandoRosasB";

    const [nombre, setNombre] = useState("Armando")

    let cursos = [
        "Master en JavaScript",
        "Master en PHP",
        "Master en React",
        "Master en CSS"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Este es un tecto en mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi github es: {github}</p>

        <input type="text" onKeyUp={e => cambiarNombre(e.target.value)} placeholder="Cambia el nombre" />
        &nbsp;
        <button onClick={e => 
            {console.log("El valor guardado en tu estado es: ", nombre)}}>
                Mostrar valor del estado</button>
        &nbsp;
        <button onClick={e => cambiarNombre("Jose Armando Rosas Balderas")}>Presioname</button>
        &nbsp;
        <ul>
            {
                cursos.map((curso, indice) => {
                    return (
                    <li key={indice}>
                        {curso}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
