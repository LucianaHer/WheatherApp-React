import React from 'react';
import Logo from '../logoHenry.png'
import style from './Nav.module.css'


import SearchBar from './SearchBar.jsx';

import './Nav.module.css';

//Nav recibe la funcion onSearch:
export default function Nav({onSearch}) {

  
  return (
   
      <div className={style.box}>
        <img className={style.img} src={Logo} alt=''/> 
        <h2>Henry  -  Weather App</h2>;
        <div className={style.search}>
          {/* aca renderiza y llama a SearchBar(busqueda), le paso la fc onSearch */}
          <SearchBar
            onSearch={onSearch}
          />
        </div>
      
      </div>
    
    
  );
};


