import React from "react";
import Category from "./Category";
import "../styles/Category.css";

function Categories({categories,selectedCategory,setModal,setSelectedCategory,setSearchText}){

    const disabledStyle={
        opacity:0.4,
        backgroundColor:"#c5c5c5",
        cursor:"not-allowed"
    }

    const handleClick=()=>{
        if(categories.length<5){
            setModal(true)
        }
    }
    return (
        <div className="categoriesList">
            {categories.map((category,Index)=>{
                return <Category key={`${category}_${Index}`} setSearchText={setSearchText} setSelectedCategory={setSelectedCategory} category={category} selectedCategory={selectedCategory}/>
            })}
            <div style={categories.length===5?disabledStyle:{}} className="AddCategory" onClick={handleClick}><img alt="add category" src={require('../assets/add.png')} /></div>
        </div>
    )
}

export default Categories