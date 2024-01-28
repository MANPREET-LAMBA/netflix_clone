import React, { useEffect, useState } from "react";
import Cards from "./Cards";

import './Trending.css';
import Banner from './Banner'
//









function Trending()
{

 


      
   return(
    <div id="xxx">
    
   
      <Banner></Banner>
    
      <div id="cards">
      <Cards title={"Trending"} url={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'}></Cards>
      <Cards title={"Top Rated"} url={'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'}></Cards>
      <Cards title={"Webseries"} url={'https://api.themoviedb.org/3/trending/tv/day?language=en-US'}></Cards>
      <Cards title={"Trending"} url={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'}></Cards>
      <Cards title={"Up-Coming Movies"} url={'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' }></Cards>
  
      </div>
    </div>
  )
}
  

export default Trending;
