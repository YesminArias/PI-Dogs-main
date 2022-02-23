import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDogs, getTemperaments, getDetail, sortName} from '../actions';
import  "../CSS/Home.css";
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
  
  return(
<div className='paginado2'>
            <FilterTempe />
                   {/*  <form className="base2"onClick={e=> handleOrdenar(e)} >
                        <input type='radio' value= "asc" ></input>
                            <label value='asc'>Ascendentemente</label><br></br>
                        <input type='radio' value="desc"></input>
                             <label value='desc'>Descendentemente</label>
                    </form> */}
     <select className="boton3" onChange={e=> handleOrdenar(e)}>
              <option value='asc'> Ascendentemente  </option>
             <option value='desc'> Descendentemente  </option>
                            
       </select> 
                    <Search/>
                </div>
  )
}