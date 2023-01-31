import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() =>{
        // Detecta cuando el componente se monta. Se ejecuta una sola vez
        alert("El componente AvisoComponente esta montado!!!")

        // Cuando el componente se desmonta
        return () => {
            alert("Componente desmontado!!!")
        };
    }, [])



  return (
    <div>
        <hr />
        <h1>Hola Armando</h1>
        <button onClick={e => {
            alert("Bienvenido")
        }}>Mostrar alerta</button>
    </div>
  )
}
