import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import Loanding from "./Loanding";
import "../CSS/Home.css";
import NavBar from "./NavBar";



export default function Home() {
  const dispatch = useDispatch(); //para despachar mis acciones
  const allDogs = useSelector((e) => e.allDogs); // poneme en allDogs todo lo que tengo en el state
  const dogs = useSelector((e) => e.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPage = 8;
  const indexOfLastDogs = currentPage * dogsPage;
  const indexOfFirstDogs = indexOfLastDogs - dogsPage;

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    useEffect(() => {
    setCurrentPage(1);
  }, [dispatch]); 

  const mostrarCards = (dogs) => {
    const currentDogs = dogs.slice(indexOfFirstDogs, indexOfLastDogs);
    return (
      <div>
        <div className="paginado2">
          {currentDogs.length === 0 && currentDogs ? (
            <Loanding />
          ) : (
            currentDogs.map((e) => {
              return (
                <div>
                  <Link
                    key={e.id}
                    to={"/dogs/" + e.id}
                    style={{ textDecoration: "inherit" }}
                  >
                    <Card
                      key={e.id}
                      name={e.name}
                      image={e.image}
                      temperament={e.temperament}
                      weight={e.weight}
                    />
                  </Link>
                </div>
              );
            })
          )}
        </div>
        <div>
          <Paginado
            dogsPage={dogsPage}
            allDogs={dogs.length}
            paginado={paginado}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
       
      <div>
        <h1 className="title2">App Dogs</h1>
        <Link to='/dog' className="boton3">Create Dogs</Link> 
      </div>
      <div>
        {/* filtrados */}
        <NavBar />

        {dogs.length > 0 ? mostrarCards(dogs) : mostrarCards(allDogs)}
      </div>
    </div>
  );
}
