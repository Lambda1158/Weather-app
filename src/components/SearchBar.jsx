import React from 'react';
import "./searchbar.css"
import { useState } from 'react';
import ReactDOM from 'react-dom'



export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form className="searchbar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className="searchtxt"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="searchboton" type="submit" value="S" />
      
    </form>
  );
}