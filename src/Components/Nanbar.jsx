import React, { useState } from 'react'
import { Link } from "react-router-dom";



function Nanbar() {
    const [navData,setNavData]=useState([
        {label:"Home",to:"/"},
        {label:"About",to:"About"},
        {label:"Contact",to:"Contact"}
        
    ])

  return (
    <>
    <nav>
    <ul className="flex justify-center md:justify-end md:pe-20 sm:py-10 py-5 bg-my-blue text-white text-lg gap-10">   
    
         {navData.map((nav)=>(
            
                <l1 className="flex flex-row"><Link to={nav.to}>{nav.label}</Link></l1>
                 
           ))} 
        </ul>
    </nav>
        
    </>
  )
}

export default Nanbar