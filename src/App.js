import './App.css';
import Cards from './components/Cards.jsx';
import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import {Route,Switch} from "react-router"
import About from "./components/About.jsx"
import Ciudad from './components/Ciudad';
const apiKey="a5ce6b9a05b4aa486b0f1c589997fd30"
export default function App() {
  const [cities,setCities]=useState([])
 

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
    <Nav onSearch={onSearch} />
    <div className="mundo">
            <Cards
              cities={cities}
              onClose={onClose}
            />
   
    <Switch>

    <Route
    path='/about'
    component={About}
    />
    
    <Route 
        path="/ciudad/:ciudadId"
        >
        <Ciudad onFilter={onFilter}/>
      </Route>  
    </Switch>
    </div>
    </div>
  );
}

