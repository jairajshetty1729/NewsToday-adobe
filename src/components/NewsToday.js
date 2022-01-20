import React,{useEffect, useState} from "react";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import NewsList from "./NewsList";
import "../styles/NewsToday.css";
import AddCategory from "./AddCategory";

function NewsToday(){

    const [categories,setCategories]=useState([{category:"TechCrunch",url:"https://calm-brook-87730.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d"}])
    const [selectedCategory,setSelectedCategory]=useState({category:"TechCrunch",url:"https://calm-brook-87730.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d"})
    const [newsArticles,setNewsArticles]=useState([])
    const [isModalOpen,setModal]=useState(false)
    const [isFetching,setFetching]=useState(false)
    const [searchText,setSearchText]=useState("")

    useEffect(()=>{
        filterArticles(searchText)
    },[searchText])

    useEffect(()=>{
        setFetching(true)
        const fetchNews=async()=>{
            setNewsArticles([])
            try{
                const response=await fetch(selectedCategory.url)
                const data=await response.json()
                console.log("28",data,selectedCategory.url)
                setFetching(false)
                setNewsArticles(data.articles?data.articles:[])
            }catch(err){
                setFetching(false)
                setNewsArticles([])
                console.error(err,"Api Call Failed")
            }
        }
        fetchNews()
    },[selectedCategory])

    const filterArticles=(searchItem)=>{
        if(searchItem){
            const filteredData=newsArticles.filter((article)=>article.title.toLowerCase().includes(searchItem.toLowerCase())||
            (article.description?article.description.toLowerCase().includes(searchItem.toLowerCase()):false)||
            (article.author?article.author.toLowerCase().includes(searchItem.toLowerCase()):
            article.source.name.toLowerCase().includes(searchItem.toLowerCase()))
            )
            return filteredData
        }else{
            return newsArticles
        }
    }

    return (
        <div className="newsToday">
            <h1 className="title">News Today</h1>
            <Categories setSearchText={setSearchText} setSelectedCategory={setSelectedCategory} setModal={setModal} categories={categories} selectedCategory={selectedCategory}/>
            <SearchBar setSearchText={setSearchText} searchText={searchText}/>
            <NewsList isFetching={isFetching} articles={filterArticles(searchText)}/>
            <AddCategory categories={categories} setCategories={setCategories} isModalOpen={isModalOpen} setModal={setModal}/>
        </div>
    )
}

export default NewsToday