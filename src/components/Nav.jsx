import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link } from 'react-router-dom';
import "./nav.css"
export default function Nav({onSearch}){
    return(
        <nav class="navbar navbar-dark bg-dark">
            <Link to='/'>
            <h3>
            Home
            </h3>
            </Link>
            <Link to="/about">
                <h3>About</h3>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}