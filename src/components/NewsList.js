import React from "react";
import SingleNews from "./SingleNews";
import "../styles/SingleNews.css";

function NewsList({articles,isFetching}){
    return (
        <div className="newsList">
            {isFetching?<div className="FetchingArticles">Fetching Articles...</div>:articles.length===0?<div className="EmptyArticles">No Articles Found</div>:articles.map((article,Index)=>{
                return <SingleNews article={article} key={`${article.publishedAt}_${Index}`}/>
            })}
        </div>
    )
}

export default NewsList