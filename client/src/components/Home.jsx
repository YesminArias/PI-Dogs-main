import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import Loanding from "./Loanding";
import "../CSS/Home.css";
import NavBar from "./NavBar";
import {  resState } from "../actions";

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
    dispatch(resState(resState));
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
    
      <div className="principal">
      <Link to= "/home" >
        <img
          id="home"
          src="https://cdn-icons-png.flaticon.com/512/35/35145.png"
          alt="no encontrada"
        />
          </Link>
      </div>
      <div className="ubboton">
        <Link to="/dog" >
          <button id="botonCreate">Create Dogs</button>
        </Link>
      </div>
      <div className="principal">

      <NavBar />
      </div>
      <div>{dogs.length > 0 ? mostrarCards(dogs) : mostrarCards(allDogs)}</div>
    </div>
       </div>
  );
}
