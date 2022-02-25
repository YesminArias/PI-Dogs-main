import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, resState, postDogs } from "../actions/index";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../CSS/CreateDog.css";


export default function DogCreate() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((e) => e.temperament);

  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minlife_span: "",
    maxlife_span: "",
    image: "",
    temperament: [],
    created: false,
  });
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(resState(resState));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name) {
      let crear = {
        name: input.name,
        height: `${input.minHeight} - ${input.maxHeight}`,
        weight: `${input.minWeight} - ${input.maxWeight}`,
        life_span: `${input.minlife_span} - ${input.maxlife_span} years`,
        image: input.image,
        temperament: input.temperament.join(", "),
      };
      dispatch(postDogs(crear));
      setInput({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        minlife_span: "",
        maxlife_span: "",
        image: "",
        temperament: [],
        created: true,
      });
    }
  }
  function handelChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSelectTemperament(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }
  function handleDelete(e) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== e),
    });
  }

  return (
    <div className="fromPerfil">
      <div >
        <div>
          
          <Link to="/home">
            <button className="boton5" onClick={resState}>
              Home
            </button>
          </Link>
          <h1 className="titleForm">Create Dog</h1>
        </div>
        <div className="">
          <form className="fromPerfil" onSubmit={resState}>
          
            <div className="">
              <label className="title5">Name:</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handelChange(e)}
              />

              <label className="title5">Height min:</label>
              <input
                type="number"
                name="minHeight"
                value={input.minHeight}
                onChange={(e) => handelChange(e)}
              />

              <label className="title5">Height max:</label>
              <input
                type="number"
                name="maxHeight"
                value={input.maxHeight}
                onChange={(e) => handelChange(e)}
              />

              <label className="title5">Weight min:</label>
              <input
                type="number"
                name="minWeight"
                value={input.minWeight}
                onChange={(e) => handelChange(e)}
              />

              <label className="title5">Weight max:</label>
              <input
                type="number"
                name="maxWeight"
                value={input.maxWeight}
                onChange={(e) => handelChange(e)}
              ></input>

              <label className="title5">Life span min:</label>
              <input
                type="number"
                name="minlife_span"
                value={input.minlife_span}
                onChange={(e) => handelChange(e)}
              />

              <label className="title5">Life span max:</label>
              <input
                type="number"
                name="maxlife_span"
                value={input.maxlife_span}
                onChange={(e) => handelChange(e)}
              />

              <label name="image" className="title5">
                Image:
              </label>
              <input
                name="image"
                value={input.image}
                onChange={(e) => handelChange(e)}
              ></input>

              <label className="title5" value="temperament" name="temperament">
                {" "}
                Temperament:{" "}
              </label>
              <select
                className="boton5"
                onChange={(e) => handleSelectTemperament(e)}
              >
                <option>Temperaments</option>
                {allTemperaments &&
                  allTemperaments.map((e) => (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  ))}
              </select><br/>

              {input.temperament.map((e) => {
                return (
                  <div className="concatFiltro">
                  <span key={e}>
                    <strong>{e}</strong>
                    <button className="boton3" onClick={(e) => handleDelete(e)}>
                      {" "}
                      x{" "}
                    </button>
                  </span>
                  </div>
                );  
              })}   
              
              <button
                className="boton5"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              > Create new Dog
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="imgperfil">
        <img src="https://cdn.shopify.com/s/files/1/1956/7269/products/Boxer-dog-Art-Print_grande.jpg?v=1589294200" alt="perfil" />
      </div>
    </div>
  );
}
