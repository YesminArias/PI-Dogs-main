import React from "react";
import "../CSS/Home.css";

export default function Paginado({dogsPage, allDogs, paginado}){
    const pageNumber=[];
    for (let i=0; i< Math.ceil(allDogs/dogsPage); i++){
        pageNumber.push(i+1);
    }
    

    return (
        <div className="paginado">
            <button className="boton3" /* onClick={prevPag} */>
            ◄
            </button>
            {pageNumber.length >1 && pageNumber.map((number)=> {
                return (
                    <ul key= {number}>
                        <button className="boton3" onClick={()=> paginado(number)}>
                            {number}
                        </button>
                    </ul>
              
                )
            })}
             <button className="boton3" /* onClick={nextPag} */>
             ►
            </button>
        </div>
    )
}