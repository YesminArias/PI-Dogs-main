import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDogs, sortWeight, sortName} from '../actions';
import  "../CSS/NavBar.css";
import FilterTempe from './FilterTempe';
import Search from './Search';

export default function NavBar(){
    const dispatch = useDispatch()//para despachar mis acciones

    useEffect(() => {
      dispatch(getDogs());
    }, [dispatch]);

    function handleOrdenar(e) {
    e.preventDefault();
    dispatch(sortName(e.target.value));
  }
  function handleOrdenarWeitgh(e) {
    e.preventDefault();
    dispatch(sortWeight(e.target.value));
  }
  
  return(
<div>
      
  <div className="filtros">
   <div>
     <Search/>
   </div>
      <div>
        <FilterTempe />
      </div>  
      <div>
         <select className="botonfiltro" onChange={e=> handleOrdenarWeitgh(e)}>
            <option value="default">By Weight</option>
            <option value='small'> small  </option>
            <option value='big'> big  </option>
         </select> 
      </div>  
     
      <div>
         <select className="botonfiltro" onChange={e=> handleOrdenar(e)}>
            <option value='default'>Alphabetically</option>
            <option value='asc'> A a Z  </option>
            <option value='desc'> Z a A  </option>
         </select> 
       </div> 
   </div>
   
</div>
  )
}