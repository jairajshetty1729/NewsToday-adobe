import React, { useState } from "react";
import Modal from 'react-modal';
import "../styles/AddCategory.css";

function AddCategory({isModalOpen,setModal,categories,setCategories}){

    const [category,setCategory]=useState("")
    const [url,setUrl]=useState("")

    const closeModal=()=>{
        setModal(false)
    }

    const handleChange=(event)=>{
        console.log(event.target.value,event.target.name)
        if(event.target.name==="category"){
            setCategory(event.target.value)
        }else{
            setUrl(event.target.value)
        }
    }
    const handleSubmit=()=>{
        if(category.trim()&&url.trim()){
            let categoriesCopy=categories.slice()
            categoriesCopy=[...categoriesCopy,{"category":category,"url":`https://calm-brook-87730.herokuapp.com/${url}`}]
            setCategories(categoriesCopy)
            setCategory("")
            setUrl("")
            closeModal()
        }
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: "50vh",
          width: "40vw"
        },
      };

    const disabledStyles={
        opacity:0.4,
        cursor:"not-allowed"
    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Add Category"
            style={customStyles}
            ariaHideApp={false}
        >
            <h2 className="modalTitle">Add Category</h2>
            <div className="modalInputs">
                <input name="category" onChange={handleChange} type="text" value={category} placeholder="Category Name"/>
                <input name="url" onChange={handleChange} type="text" value={url} placeholder="API URL"/>
                <div style={category.trim()&&url.trim()?{}:disabledStyles} onClick={handleSubmit} className="ModalAddBtn">+ Add</div>
            </div>
            
        </Modal>
    )
}

export default AddCategory