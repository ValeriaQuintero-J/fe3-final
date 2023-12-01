import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const[fav,setFav]= useState([])
  

  const getData = () =>{
    return localStorage.getItem("card")
    
  }

  useEffect(()=>{
    setFav(JSON.parse(getData()))
  },[])
  console.log(fav)
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid" >
      
        
        <Card key={fav.id}
        
          id= {fav.id}
          name={fav.name}
          username={fav.username}
        />
       
       
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
