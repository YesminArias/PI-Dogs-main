import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../actions/index";
import { useEffect } from "react";
import '../CSS/CreateDog.css';

export default function DogCreate(){
    const dispatch = useDispatch();
    const allTemperaments= useSelector((e)=> e.temperament)

    const [input, setInput]= React.useState({
        name:'',
        height: '',
        weight: '',
        life_span: '',
        image: '',
        temperament:[],
    })
    
    

        useEffect( ()=> {
            dispatch(getTemperaments())
        },[])
        
       
      


        return (
            <div>

               <div  className="container">
            <form className="titleForm">
            <h1>Create Dog</h1>
            <div>
                    <label className="title5">Name:</label>
                    <input></input><br/>
                    
                    <label className="title5" >Height min:</label>
                    <input type='number'/> <br/>
                    <label className="title5" >Height max:</label>
                    <input type='number'></input><br/>
                    <label className="title5">Weight min:</label>
                    <input type='number'/> <br/>
                    <label className="title5">Weight max:</label>
                    <input type='number'></input><br/>
                    <label className="title5">Life span min:</label>
                    <input type='number'/> <br/>
                    <label className="title5">Life span max:</label>
                    <input type='number'></input><br/>
                    <label className="title5">Image:</label>
                    <input  src="" ></input><br/>
                    
                    <label className="title5">Temperament:</label>
             
                <select className="boton4" >
                 {allTemperaments && allTemperaments.map(e => (
                    <option key={e.id} value={e.name} >{e.name}</option>
                      ))}
                      </select><br/>
                    
                     
                          <span>grupoTemperament</span>
                      </div>
                      
                      <button className="boton5">Agregar</button>

              </form>
              </div>
           </div>
        )
}