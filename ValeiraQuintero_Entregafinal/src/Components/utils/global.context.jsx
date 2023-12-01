import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: 'Black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
}

export const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  
  const [dark, setDark] = useState(false);
  const[fav,setFav]= useState([])

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setDark(isDark)
  }, [dark])

  const getData = () =>{
    return localStorage.getItem("card")
    
  }
  useEffect(()=>{
    setFav(JSON.parse(getData()))
  },[])
  console.log(fav)

  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }

  const theme = dark ? themes.dark : themes.light
  return (
    <ContextGlobal.Provider value={{theme, dark, toggle, fav, setFav}}>
      {children}
    </ContextGlobal.Provider>
  );
};
