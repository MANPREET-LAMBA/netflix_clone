import { useState, useEffect } from "react";
import './CardS.css'



function Cards({title,url})
{
    const imageurl = "https://image.tmdb.org/t/p/original/";
    const[value,setvalue]=useState([]);
    const options = {
        method: 'GET',
      headers: {
        accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjIxYWRkZDE5MTViOTEzMGI5ODMyOWZkYjE0MDc2OCIsInN1YiI6IjY1OWJiNzA4YmQ1ODhiNjRhOTE0NGQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRfgLgPIiln_TEw_kY9FiAQArlVH4p8nu5lIoF7vJCo'
      }
    };
      useEffect(()=>
      {
        async function get()
        {
          const data= await fetch(url,options)
          const data2= await data.json();
          
          setvalue(data2.results);
          
        }
        get();
      },[])
     

 

      return(
        <div id="mainx">
            <h1>{title}</h1>
            <div className="row">
            {
                value.map((poster)=>
                {
                   const id= poster.id;
                 
                   return(
                 
                  
                   <img  src={imageurl+poster.poster_path}></img> 
              
                  
                   ) 
                })
            }
            </div>
        </div>
      )



}

export default Cards;