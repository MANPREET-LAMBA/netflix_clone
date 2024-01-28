import { useState, useEffect } from "react";
import './Banner.css';
import './Media.css';
import Logo from './Netflix_logo.png';
//

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';

function Banner() {
  const imageurl = "https://image.tmdb.org/t/p/original/";
  //   const url='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const [value, setvalue] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjIxYWRkZDE5MTViOTEzMGI5ODMyOWZkYjE0MDc2OCIsInN1YiI6IjY1OWJiNzA4YmQ1ODhiNjRhOTE0NGQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRfgLgPIiln_TEw_kY9FiAQArlVH4p8nu5lIoF7vJCo'
    }
  };
  useEffect(() => {
    async function get() {
      const data = await fetch(url, options)
      const data2 = await data.json();
      //  console.log(data2)
      setvalue(data2.results);
    }
    get();
  }, [])

  console.log(value);


  return (
    <div id="wrapx">


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}


        modules={[Autoplay]}
      >
        <div id="test">   <img src={Logo}/></div>
        {
          value.map(
            (data) => {
              const back=imageurl + data.poster_path;
              return (
                <div>
                     <div id="test"><img src={Logo}/>
                     
                       </div>
                  <SwiperSlide>
                    <div id="container"  >
                      <img width={'100%'} height={'550px'} src={imageurl + data.backdrop_path} ></img>



                      <div id="contant">

                        <div>
                          <img src={Logo} ></img>
                          <h1>{data.original_title}</h1>
                          <div id="banner_btn">
                            <button>Watch Now</button>
                            <button>View Trailer</button>
                          </div>
                          <p>{data.overview}</p>

                        </div>

                      </div>
                      <div id="bottom-effect"></div>




                    </div>
                    <div id="sl-screen" style={{
                      backgroundSize: "cover",
                      backgroundImage:`url(${back})`}
                      }>
                        <div id="sl-btn">
                          <button> Play</button>
                          <button>Add</button>
                        </div>
                      <div id="bottom-effect"></div>
                    </div>
                  </SwiperSlide>

                  
                </div>

              )
            }
          )
        }
      </Swiper >


    </div >
  )
}
export default Banner;