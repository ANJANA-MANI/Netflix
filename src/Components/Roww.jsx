import React, { useState } from 'react'
import { useEffect } from 'react';
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './Roww.css'
function Roww({title,fetchUrl,isPoster}) {
    
const[allmovies,setallMovies]=useState()
const base_url="https://image.tmdb.org/t/p/original/";

    const fetchData=async()=>{
      const {data}=await tmdbAxiosInstance.get(fetchUrl)
      setallMovies(data.results)
      
    }
   
    useEffect(()=>{fetchData()},[])
  return (
    <div className='row'>

        <h1>{title}</h1>
        <div className='movies-row'>
        {
          allmovies?.map(item=>(
            
            <img className='movies' src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`}alt="noimg"/>
          ))
        }
        </div>
    </div>
  )
}

export default Roww