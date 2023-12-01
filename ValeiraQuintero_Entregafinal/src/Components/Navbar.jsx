import React from 'react'
import {Link} from "react-router-dom"
import {ContextGlobal} from './utils/global.context'
import { useContext } from 'react'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const { theme, toggle, dark } = useContext(ContextGlobal)
  return (
    <nav style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }}>
      <Link to="/home">Home</Link>
      <Link to="/favs" >Favs</Link>
      <Link to="/contacto" >Contacto</Link>
    
      <button 
      onClick={toggle}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }}
       >{!dark ? 'Dark' : 'Light'} theme
       </button>
    </nav>
  )
}

export default Navbar