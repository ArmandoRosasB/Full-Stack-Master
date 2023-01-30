import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    // Problematica
    /*  let nombre = "Armando Rosas";

    const cambiarNombre = (e) => {
        nombre = "Ramona Najera"
    }*/

    //Varaible a modificar y funcion
    const [nombre, setNombre] = useState("Armando Rosas");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }



  return (
    <div>
        <h3>Componente: MiPrimerEsatdo</h3>
        <strong className='label'>
            {nombre}
        </strong>

        &nbsp; {/* Espacio */}

        <button onClick={ e => cambiarNombre(e, "Ramona Najera") }>
            Cambiar nombre por Ramona
        </button>

        &nbsp;

        <input type="text" onKeyUp={ e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre con onKeyDown'/> {/*onKeyUp: Cada vez que levante el dedo de una tecla */}
        <input type="text" onChange={ e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre con onChange'/>
    </div>
  )
}
