import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import App from './App'
import Contact from './Routes/Contact'
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} >
          <Route path='/home' element={<Home/>} />
          <Route path='/contacto' element={<Contact/>} />
          <Route path='/favs' element={<Favs/>} />
          <Route path='/details/:id' element={<Detail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


