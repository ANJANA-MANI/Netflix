import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from './tmdbAxiosInstance';

function Banner({fetchUrl}) {
const[movies,setMovies]=useState()
const base_url="https://image.tmdb.org/t/p/original/";

    const fetchData=async()=>{
      const {data}=await tmdbAxiosInstance.get(fetchUrl)
      setMovies(data.results[Math.floor(Math.random()*data.results.length)]);
     
    }
   
    useEffect(()=>{fetchData()},[])
    console.log(movies);
  return (
    <div style={{backgroundImage:`url(${base_url}${movies?.backdrop_path})`,
           height:"600px",
           backgroundSize:"cover",
           backgroundAttachment:"fixed",
           backgroundPosition:"center"
}}>
    <div className="banner-content">
        <h1>{movies?.name}</h1>
        <h5>{movies?.overview}</h5>
    </div>
</div>
  )
}

export default Banner