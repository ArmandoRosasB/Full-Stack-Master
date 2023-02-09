import React, { useEffect, useState } from 'react'


export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");

    // Generico / Basico

    

    const getUsariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1") // Devuelve una promesa
            .then (respuesta => respuesta.json()) // json a objeto
            .then (resultado_final => {
                setUsuarios(resultado_final.data);
                console.log(usuarios);
            }, 
            error =>{
                console.log(error);
            }
        );
    }

    const getUsuariosAjaxAW = () => {
        setTimeout( async() => {
            try{
                const peticion  = await fetch("https://reqres.in/api/users?page=2");
                const {data} = await peticion.json();

                setUsuarios(data);
                setCargando(false);
            }
            catch(error){
                setErrores(error.message);
            }
            
        }, 2000);

        
    }

    useEffect(() => {
        //getUsariosEstaticos();
        //getUsariosAjaxPms();
        getUsuariosAjaxAW();
    }, []);

    if(errores !== ""){
        return (
            <div className="errores">
                {errores}
            </div>
        )
    } else if (cargando === true){
        // Cuando esta todo cargando
        return (
            <div className="cargando">
                Cargando datos...
            </div>
        )
    }
    
    else if (cargando == false && errores === ""){
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
    
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            console.log(usuario)
                            return (<li key={usuario.id}> 
                                <img src={usuario.avatar} alt="Avatar" width="20" />
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}
                            </li>)
                        })
                    }
    
                </ol>
    
    
            </div>
        )
    }

    

    
}
