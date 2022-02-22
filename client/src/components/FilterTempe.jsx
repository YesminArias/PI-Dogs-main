import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, getDogs, filterTemperament } from "../actions/index";



export default function FilterTempe() {
  const dispatch = useDispatch();
  const allTemperaments= useSelector((e)=> e.temperaments)


  useEffect( ()=> {
      dispatch(getTemperaments())
  },[dispatch])
  
  const handleFilterTemperaments=(e)=>{
    dispatch(filterTemperament(e.target.value))
  }
  

  return (
    <div >
         <div>
            <select className="boton3" onChange={e=> handleFilterTemperaments(e)}>
                <option value="All">
                    all Temperaments
                </option>
                {allTemperaments && allTemperaments.map(e => (
                    <option key={e.id} value={e.name}> {e.name} </option>
                ))}
               
            </select>
        </div> 
    </div>
  );
}