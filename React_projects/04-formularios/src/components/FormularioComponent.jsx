import React from 'react'
import { useState } from 'react';

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        let data = e.target;
        let _usuario = {
            nombre: data.nombre.value,
            apellidos: data.apellidos.value,
            genero: data.genero.value,
            bio: data.bio.value,
            enviar: data.enviar.value
        };

        console.log(_usuario); //Valor del campo

        setUsuario(_usuario);
    }

    const cambiarDatos = (e) => {
        let name_input = e.target.name;
        let usuario_modificar = usuario;

        // usuario_modificar[name_input] = e.target.value;

        setUsuario(estado_previo => ({
            ...estado_previo, // Expandimos el objeto, clon de lo anteror
            [name_input]: e.target.value
        })
        );
    }

    return (
        <div>
            <h1>Formularios con React</h1>

            {usuario.enviar  && 
                (
                    <div className="info_usuario label label-gray">
                    {usuario.nombre} {usuario.apellidos} es un {usuario.genero} y 
                    su biografia es esta: <p>{usuario.bio}</p>
                    </div>
                )
            }

        
            <form onSubmit={e => conseguirDatosForm(e)}>
                <input type="text" 
                    placeholder='Nombre'
                    name='nombre'
                    onChange={cambiarDatos}
                />
                <input type="text" 
                    placeholder='Apellido'
                    name='apellidos'
                    onChange={cambiarDatos}
                />

                <select name='genero'  onChange={cambiarDatos}>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <textarea placeholder='About me' name='bio'  onChange={cambiarDatos}></textarea>

                <input type="submit" value='Enviar' name='enviar'/>
            </form>
        </div>

    )
  
}
