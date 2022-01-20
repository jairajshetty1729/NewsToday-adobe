import React from "react";
import "../styles/SingleNews.css";

function SingleNews({article}){

    const convertDateToString=(date)=>{
        const d = new Date(date);
        let dateString=d.toLocaleString()
        dateString=dateString.replace(",","")
        dateString=dateString.replace(/\//g,"-")
        return dateString
    }

    return (
        <div className="singlenews">
            <div className="articleContent">
                <div className="articleTitle">
                    {article.title}
                </div>
                <div className="articleMeta">
                    {`${article.author?article.author:article.source.name} . ${convertDateToString(article.publishedAt)}`}
                </div>
                <div className="articleText">
                    {article.description}
                </div>
            </div>
            <div className="articleImage">
                <img alt="article_pic" src={article.urlToImage?article.urlToImage:"https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_1280.png"} width={"100%"} height={"100%"} />
            </div>
        </div>
    )
}

export default SingleNews