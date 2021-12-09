import React from 'react';
import  "./card.css"
import { Link } from 'react-router-dom';
export default function Card({ max, min, name, img, onClose,id }) {
  // acá va tu código
  //const {max,min,name,img,onclose}=props 
   //  onClick={()=>onClose(name)}
   


  return (
    <div className="carta">
        <div className="closeIcon">
        <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
    <div className="titulo">
            <Link to={`/ciudad/${id}`}>
              <h5>{name}</h5>
            </Link>
    </div>
    <div className="elementos">
    <p className="texto">Max {Math.round(max-273.15)}</p>
    <p className="texto">Min {Math.round(min-273.15)}</p>
    <div>
    <img className="foto" src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="pepe" />
    </div>
      </div>
    </div>
  )
};