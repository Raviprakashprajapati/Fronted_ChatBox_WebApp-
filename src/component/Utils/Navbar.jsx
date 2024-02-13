import React from 'react'
import "../css/Navbar.css"
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  return (
    <>
    
    <div className='mt-5'>

     <div className='flex justify-evenly items-center' >
     <div class="button-borders">
        <button class="primary-button " onClick={()=>navigate("/profile")}> Profile
        </button>
        </div>

        <div class="button-borders">
        <button class="primary-button" onClick={()=>navigate("/user")}> Chat With People
        </button>
        </div> 
     </div>


      
    </div>

 

    </>
  )
}

export default Navbar
