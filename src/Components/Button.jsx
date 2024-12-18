import React, { useState } from 'react'
import { Link } from "react-router-dom";


function Button() {
    const [navData,setNavData]=useState([
        {label:"ABOUT ME",to:"About"},
        {label:"MORE INFO",to:"Contact"},

        
    ])
  return (
    <div>
        {navData.map((nav)=>(
                 <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={nav.to}>{nav.label}</Link></button>
           ))} 
    </div>
    
  )
}

export default Button