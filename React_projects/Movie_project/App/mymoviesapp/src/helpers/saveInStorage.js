export const saveInStorage = (key, item) => { //Clave del local storage y elemento a guardar
    // Conseguir los elementos que ya tenemos en el localStorage
    let items = JSON.parse(localStorage.getItem(key));

    //Comprobar si hay es array
    if(Array.isArray(items)){
    //Guardar dentro del array un elemento
        
    items.push(item);
    
    } else { //Crear un array con el nuevo elemento
        items = [item];

    }
    // Guardando en el almacenamiento local
    localStorage.setItem(key, JSON.stringify(items));

    //Devolver el objeto
    return item;
  }