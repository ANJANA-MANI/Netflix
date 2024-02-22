import React, { useState } from 'react'
import { useEffect } from 'react'

function Nav() {
    const[show,setShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>350)
            {
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
    console.log(show);
  return (
    <div className={`${show&&'nav-black'} nav`}>
        <img width={'150px'} src="pngwing.com.png" alt="icon" />
    </div>
  )
}

export default Nav