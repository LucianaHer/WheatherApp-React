import React from 'react';
import Card from './Card.jsx'
import styles from './Cards.module.css'

export default function Cards({cities, onClose}) {  //recibe array de objetos(mismo nombre cdo se le pasa)
  // acá va tu código
  if (cities){

    return (
      <div className={styles.div}>
        {cities.map(c => <Card 
        //p/cada elem del array renderiza el componente Card (le paso estas prop:)
          name={c.name} 
          min={c.min} 
          max={c.max} 
          img={c.img} 
          onClose={()=>onClose(c.id)} 
          key={c.id}
          />)}    
    </div>
  )
  }else{
  return(<div>Sin ciudades</div>)
}
  // tip, podés usar un map
  
};