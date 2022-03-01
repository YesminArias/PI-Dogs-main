import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getName, getDogs } from "../actions/index";
import "../CSS/Search.css";

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
      dispatch(getDogs());
  }, [dispatch]);

   function handleInputChange(e) {
     e.preventDefault();
      setName(e.target.value);
     
      if(name.length>=1){
    dispatch(getName(name));
  } else{
    dispatch(getDogs());
  }
}
  function handleSubmit(e) {
    e.preventDefault(); 
     setName(""); 
  }
  return (
    <div>
         <div className="search">
      <input
        type="text"
        placeholder='Dog Breed...'
         onChange={(e) => handleInputChange(e)} 
         onInput={(e) => handleSubmit(e)} 
        className='buscador'
      /><span className="figurabuscador"> 🔍</span>
     </div> 
    </div>
  );
}