import React, { useEffect } from 'react'
import { useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Armando Rosas");
    const [fecha, setFecha] = useState("01-01-1998");
    const [contador, setContador] = useState(0);

    const cambiarFecha = (e) => {
        setFecha(Date.now);
    }

    const modUsuario = (e) => {
        setUsuario(e.target.value);

    };

    // [] Solo se ejecuta una vez, al cargar el componente
    useEffect(() => {
        console.log("Haz cargado el componente PruebasComponent")
    }, []);

    //Se ejecuta solo si cambio el usuario
    useEffect(() => {
        setContador(contador + 1);
        console.log(`Haz modificado el usuario: ${contador}`)
    }, [usuario]);

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className= { contador >= 10 ? "label label-green": "label"}> {usuario}</strong>
        <strong>{ fecha }</strong>
        <p>
            <input type="text"
                    onChange={ modUsuario }
                    placeholder='Cambia el nombre'
            />

            <button onClick={ cambiarFecha }>Cambiar fecha</button>

        </p>

        { usuario == "Armando" && <AvisoComponent/>}
    </div>
  )
}
