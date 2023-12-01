import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const Card = ({ name, username, id }) => {

  

  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    localStorage.setItem("card",JSON.stringify({id, name, username}))
  
  }

  return (
    <div className="card">
      <img src="../images/doctor.jpg" alt='doctor' width={200}/>
      <Link to={'../details/'+`${id}`} >
        <h4>{id}</h4>
        <h3>{name}</h3>
        <h4>{username}</h4>
      </Link>
        
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
