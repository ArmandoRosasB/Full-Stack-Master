import React, { useState } from 'react'
import { saveInStorage } from '../helpers/saveInStorage';

export const Create = () => {

  const tituloComponente = "Add Movie"; //Titulo del componente
  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  });

  const {titulo, descripcion} = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault(); // Prevenir que la pagina se refresque


    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    
    //Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(), //Fecha en Unix
      titulo, 
      descripcion
    }

    // Guardar estado
    setPeliState(peli);

    saveInStorage("movies", peli);
    
    
  
  
  }

  return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <strong>
              {(titulo && descripcion) && `Haz creado la pelicula ${titulo}`}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                id="titulo"
                name="titulo"
                placeholder="Title"/>

                <textarea 
                id="descripcion"
                name="descripcion"
                placeholder="Description"></textarea>

                <input type="submit"
                        id="save"
                        value="guardar"
                />
            </form>
        </div>
  )
}
