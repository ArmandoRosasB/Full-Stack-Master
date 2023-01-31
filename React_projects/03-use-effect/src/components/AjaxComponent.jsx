import React, { useEffect, useState } from 'react'


export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);

    // Generico / Basico

    const getUsariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    const getUsariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1") // Devuelve una promesa
            .then (respuesta => respuesta.json())
            .then (resultado_final => {
                setUsuarios(resultado_final.data);
                console.log(usuarios);
            }, 
            error =>{
                console.log(error);
            })
    }

    useEffect(() => {
        //getUsariosEstaticos();
        getUsariosAjaxPms()
    }, []);


    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>

            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        console.log(usuario)
                        return <li key={usuario.id}> {usuario.first_name} {usuario.last_name}</li>
                    })
                }

            </ol>


        </div>
    )
}
