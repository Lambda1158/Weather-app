import React, { useState,useEffect } from "react";
import { useParams } from 'react-router';
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
          },[]);
        
          
    
        return (<div>
            { 
                city ? 
                <div >
                    <div >
                        <h2>{city.name}</h2>
                        <div >
                            <div>Temperatura: {city.city.temp} ºC</div>
                            <div>Clima: {city.city.weather}</div>
                            <div>Viento: {city.city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.city.clouds}</div>
                            <div>Latitud: {city.city.latitud}º</div>
                            <div>Longitud: {city.city.longitud}º</div>
                        </div>
                    </div>
                </div>
                : 
                <div> no encontre la ciudad </div>}
        </div>)
    
}