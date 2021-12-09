import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link } from 'react-router-dom';
import "./nav.css"
export default function Nav({onSearch}){
    return(
        <nav className="nav">
            <div>
            <Link to='/'>
            <span>
            Home con foto
            </span>
            </Link>
            <Link to="/about">
                <span>about</span>
            </Link>
            </div>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}