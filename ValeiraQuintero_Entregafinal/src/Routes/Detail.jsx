import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 

  const params = useParams()
  const [vector, setVector] = useState([]);

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    const data = await
    fetch('https://jsonplaceholder.typicode.com/users')
    const convert = await data.json();
    setVector(convert)
  
    }
    const obj = vector.find(obj => obj.id === parseInt(params.id))
  return (
    <>
      <h1>Detail Dentist ID {params.id}</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
            <tr>
              <td>{obj?.name}</td>
              <td>{obj?.phone}</td>
              <td>{obj?.email}</td>
              <td>{obj?.website}</td>
            </tr>
          </tbody>
         </table>
      
    </>
  )
}

export default Detail