import React from "react";
import "../styles/SearchBar.css";

function SearchBar({setSearchText,searchText}){

    const handleChange=(event)=>{
        setSearchText(event.target.value)
    }
    return (
        <div className="searchBar">
            <input type="text" value={searchText} onChange={handleChange} placeholder="Search for keywords, author"/>
        </div>
    )
}

export default SearchBar