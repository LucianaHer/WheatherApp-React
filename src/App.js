import React from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import styles from './App.module.css';


export default function App() {
 //defino mi estado local cities y su función seteadore setCities
  //el valor inicial de cities será un array vacío ([])
  const [cities,setCities]=React.useState([]);   //inicializo un array vacio
  //const [state, setState]=React.useState({cities: []});
  
  //esta es la key para acceder a la url de la APi:
  const apiKey='fa64efcfd19e3899544e3466e2728671'  // esta es mi Key propia, me suscribi a la Api
  //const apiKey='4ae2636d8dfbdc3044bede63951a019b'  // la key del hmwk

  //funcion de busqueda cdo se ingresa una ciudad, city es  un string:
  //se define aca y se va haciendo un pasamano de ella hasta serachBar, q es quien la va a ejecutar cdo el uduario ingrese uuna cdad
  //1° la paso a Nav, Nav la pasa a searchBar
  function onSearch(city){
    
    let cius=cities.filter(e=>(e.name).toLowerCase() === city.toLowerCase())
    if(cius.length !== 0){ // si el estado ya tiene esa ciudad no permite ingresarla    
      alert('Ciudad repetida');
    }else{  
      //con fetch accedo a la api, le paso la city(string) para q busque esa:(es para hacer un request de un servidor), fetch devuelve una promise
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      //1° then convierte el requerimiento en formato json:
        .then(data=>data.json())
        //2° then convierte al 1° then en un objeto(guardado en recurso):
        .then(recurso=>{
          //console.log(recurso);
          //si el obj es!== undefines es x q existe:
          //se puede validar de != maneras, podria preguntar si recurso.cod es === 200 (q es la rpta cdo encuentra el recurso bien)
          if(recurso.main !== undefined){
            //guardo el recurso definiendo mi propio objeto 'city' con las propiedades q me interesan de recurso: 
            const city = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
        
            //aca llamo a la funcion seteadora setCities, q es el 2do parametro del useState, le concateno  al array prevCities,
            // el nuevo objeto,y lo va a renderizar en el return
            setCities(prevCities=>[...prevCities, city]); // a setCities le estoy pasando una arrow function, que concatena una cdad al arreglo
                                                        //si hago: setCities(cities), estaria pisando las cdades anteriores x la nueva
            /*   setCities= function(prevcities,city {     // prevCities q recibe es el cities (1° parametro de useState)
              return prevcities.concat(cities)
            }); */
 
          }else{
            //si no encuentra el recurso en la Api:
            alert ('Ciudad no encontrada');
          }
        });
      //cierro el then
    } 
  }

    //esta es la funcion para cerrar con la X de cada tarjeta, recibe una id, del objeto
  // la defino aca y la paso como pasamanos hasta Cards  q la va a ejecutar cdo el usuario cliquee la X de una tarjeta
  function onClose(id){
    //lamo a la fc seteadora xq hubo una accion y cambia el estado
    //al array prevCities le hago un filter q solo me devuelve los objetos q son distintos al id cliqueado
    setCities(prevCities => prevCities.filter(c=> c.id !== id))
    //setCities(fc useState) siempre trabaja sobre cities(el estado)
    //a cities le hago un filter, el filter por cada dato(objeto c), devuelve un  array los que sean dist. a la id que cliqueo
  }  


  return (
    //renderizo los componentes
    <div className={styles.app}>
      {/* le paso al componente Nav la funcion onSearch */}
      <Nav onSearch={onSearch}/> 

      {/* renderizo el componente Cards , le paso el array cities (1° arg de useState), y la fc onClose*/}
      <div className={styles.cartas}>
        <Cards cities={cities} onClose={onClose}/> 
      </div>
      
    </div>
  );
}



