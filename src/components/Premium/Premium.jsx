import React, { useContext } from 'react'
import { store } from '../../App';
import { CiLock } from "react-icons/ci";
import './Premium.css'
function Premium() {
  const [theme, setTheme] = useContext(store);

  return (

      <div className='border-pre' style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",paddingTop:"3rem"}}>
        <div className='bg-img' >
          <div className='blur-bg'>
          <h3>Unlock Premium Features <CiLock/> </h3>
          <button>Unlock</button>
          </div>
        </div>
      </div>
   
  )
}

export default Premium