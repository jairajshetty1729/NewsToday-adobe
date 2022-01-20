import React from "react";
import "../styles/Category.css";

function Category({category,selectedCategory,setSelectedCategory,setSearchText}){

    const defaultStyle={
        color: "#7E7E7E",
        background: "#EAEAEA 0% 0% no-repeat padding-box"
    }

    const focusStyle={
        color: "#000000",
        background: "#00F0C2"
    }

    const handleClick=()=>{
        setSelectedCategory(category)
        setSearchText("")
    }

    return (
        <div onClick={handleClick} style={category.category===selectedCategory.category?focusStyle:defaultStyle} className="Category">
            {category.category}
        </div>
    )
}

export default Category