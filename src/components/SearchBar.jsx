import React from 'react';
//import React, { useState } from "react";
import styles from './SearchBar.module.css'


//recibe la fc onSearch:
 export default function SearchBar({onSearch}) {
  // acá va tu código
  //defino estado local para ir guardando lo que escriba el 
  //usuario en la barra de búsqueda. Este es el estado del componente SearchBar
  const [city, setCity]=React.useState("");

  //defino una función que afectará a mi estado
  //para pasarle al onChange del input
  const cambiaInput = (e) => {
  e.preventDefault(  );
    setCity(e.target.value) // ahora el estado es = al valor del input *setCity(2°arg de useState), cambia el estado(1er arg del useState)
  }                         //target.value es una prop del input, q tiene su valor

  return (

    <form onSubmit={(e) => {   //retorna un formulario,  OnSubmit es cdo se hace enter en el formulario
      e.preventDefault(); //en un submit input, para evitar q se actualice la pag y pierda los datos, se hace esto, 
                          //'e' tiene toda la info del evento
      //cuando haga el submit ejecutaré la función onSearch 
      //con mi estado city es decir, lo que sea que haya escrito
      //el usuario.
      onSearch(city); //ejecuta la fc (la fc actualiza el estado de App: agrega esa ciudad al arreglo )
      setCity("");  // limpia el campo de input, el estado del input queda vacio.
      }}>

      <div>                                      
        <input className={styles.input} 
          type="text" 
          placeholder="Ciudad..."       
          value={city}  // value es una prop del tag input, le digo que sea igual acity, el estado de searchBar
          onChange={e=>cambiaInput(e)} //onChange es un evento del input=> hay q actualizar el estado con el value del input
                                        // fc cambiaInput definida arriba x mi, cambia el estado con el valor del input
                                             
              
        />
        <input className={styles.btn} type="submit"  value='Agregar'/>
      </div>
    </form>
  );
};
 



