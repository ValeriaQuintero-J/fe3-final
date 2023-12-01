import React from "react";
import { useState } from 'react'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  
  const handleSubmit = e => {
      e.preventDefault()
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
        if(nombre.length>5 && validEmail.test(email)){

          setError(false)
          setMessage("Gracias, " + nombre + " te contactaremos cuando antes vía mail");
           
        }else{
          setError(true)
          setMessage("Por favor verifique su informacion nuevamente");
        }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor='nombre'>Nombre: </label>
        <input
            type='text'
            placeholder='Ingresar Nombre'
            id='nombre'
            value={nombre}
            onChange={e =>setNombre(e.target.value)}
        />

        <label htmlFor='email'>Email: </label>
        <input
            type='text'
            placeholder='Ingrese su email'
            id='email'
            value={email}
            onChange={e =>setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>

      </form>
      <div>
        {error && <p>{message}</p>}
        {!error && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Form;
