import React from 'react';
import styleCarta from './Card.module.css'

export default function Card({name, min, max, img, onClose}) {  // con distructoring
 
  // acá va tu código
  return ( 
    <div className={styleCarta.carta}>
      <button className={styleCarta.button} onClick={onClose}> X </button>
      <h2 className={styleCarta.nombrecity}>{name}</h2>
      <img className={styleCarta.img}  src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt='no encontrada' />
      
      {/* <div className={styleCarta.center}> */}
        <span className={styleCarta.posmin}>
          <h5>Min </h5>
          <h5>{min}°</h5>
        </span>
        <div className={styleCarta.posmax}>
          <h5>Max </h5>
          <h5>{max}°</h5>
        </div>
      
      {/* </div> */}
      
    </div>
    );
};