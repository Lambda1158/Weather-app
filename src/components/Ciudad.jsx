import React, { useState,useEffect } from "react";
import { useParams } from 'react-router';
import "./ciudad.css"
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';


export default function Ciudad() {
    var {ciudadId}=useParams()
    
    const [city, setState]=useState(null)
    
    function getCityById(ciudadId)  {
        //Llamado a la API del clima
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=${apiKey}`)
          .then(r => r.json())
          .then((recurso) => {
              console.log(recurso)
            if(recurso.main !== undefined){
              const ciudad = {
                id: recurso.id,
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon
              };
              setState({city: ciudad})
            } else {
              alert("Ciudad no encontrada");
            }
          });
      }
   
        // var city = this.props.onFilter(this.props.match.params.ciudadId)
        // this.setState({city})
        //aca tendriamos que haber llamado a la API
        useEffect(() => {
            getCityById(ciudadId)
          },[ciudadId]);
        
          
    
        return (<div>
            { 
                city ? 
                    // <div className="conteiner" >
                    //     <h2>{city.city.name}</h2>
                    //         <p>Temperatura: {city.city.temp} ºC</p>
                    //         <p>Clima: {city.city.weather}</p>
                    //         <p>Viento: {city.city.wind} km/h</p>
                    //         <p>Cantidad de nubes: {city.city.clouds}</p>
                    //         <p>Latitud: {city.city.latitud}º</p>
                    //         <p>Longitud: {city.city.longitud}º</p>
                    // </div>
                <div className="ciudad"> 
                <div class="card text-center">
                <div class="card-header ">
                Mas Detalles
                </div>
                <div class="card-body">
                <h5 class="card-title">{city.city.name}</h5>
                <p class="card-text">Temperatura {city.city.temp} ºC</p>
                <p class="card-text">Vientos{city.city.wind}</p>
                <p class="card-text">Cantidad de nubes: {city.city.clouds}</p>
                <p class="card-text">Latitud: {city.city.latitud}º</p>
                <p class="card-text">Longitud: {city.city.longitud}º</p>
                
                <img src={`http://openweathermap.org/img/wn/${city.city.img}@2x.png`}/>
                </div>
                <div class="card-footer text-muted">
                Weather App
                </div>
                </div>
                  </div>
                : 
                <div> no encontre la ciudad </div>}
        </div>)
    
}