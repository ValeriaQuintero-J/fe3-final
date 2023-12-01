import React from 'react'
import Card from '../Components/Card'
import {useState, useEffect} from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [vetor, setVetor] = useState([]);

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    const data = await
    fetch('https://jsonplaceholder.typicode.com/users')
    const convert = await data.json();
    setVetor(convert)
    console.log(vetor);
    }
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      
        {vetor.map(object => (
        
          <Card 
            key={object.id}
            id= {object.id}
            name={object.name}
            username={object.username}
          />
         
         ))}
         
        
      </div>
    </main>
  )
}

export default Home