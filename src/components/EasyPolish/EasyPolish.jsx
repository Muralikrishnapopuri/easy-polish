import React, { useContext, useEffect, useState } from 'react'
import { firebaseAuth } from '../../utils/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {FaPowerOff} from 'react-icons/fa';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiStarSmileLine } from "react-icons/ri";
import White from "../../assets/images/White.png"
import Black from "../../assets/images/Black.png"
import { store } from '../../App';
import './EasyPolish.css';
import Free from '../Free/Free';
import Premium from '../Premium/Premium';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function EasyPolish() {
  const [theme,setTheme,User,setUser]=useContext(store);
  // const [customer,setCustomer]=useState("");
  const [editor,setEditor]=useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(currentUser) =>{
      if(!currentUser) navigate("/login");
      if(currentUser){
        var email = currentUser.email;
        var userr = email.substring(0,email.indexOf("@"));
        setUser(userr)
        
      }

     
  });
  },[])


  return (
    <div className='edit' >
      <main className={theme?'editor-black':'editor-white'} id='editor-main'>
        <div id="nav-item1">
           <div>
           <img className='logo' src={theme==0?White:Black} alt="Logo" />
           <span id={theme?"Site-Name-dark":"Site-Name-white"} style={{marginRight:"1rem"}}>ixels Polish </span>
           </div>
           <div className='cards' id='cards'>
          <button className='btn1' onClick={()=>{
            setEditor(0);
          }}>
            <RiStarSmileLine/>
            Free</button>
          <button className='btn2'
          onClick={()=>{
            setEditor(1);
          }}
          >
            <MdOutlineWorkspacePremium/>
            Premium</button>
           </div>
        </div>
       

         <div className='nav-item2'>
          <div className={theme==true?"toggle-white":"toggle-dark"} onClick={()=>{
              setTheme(!theme);
              }}>
            <div className={`switch ${theme==0 ? "slide " : ""}`}></div>

          </div>
          <span onClick={() => signOut(firebaseAuth)}>SIgn Out</span>
         </div>

      </main>

      <div>
       
        {
          editor==0?
          <div >
          <div className='cards-2' id={theme?'cards2-dark':'cards2-white'} style={{margin:"0px"}}>
          <button className='btn1' onClick={()=>{
            setEditor(0);
          }}>
            <RiStarSmileLine/>
            Free</button>
          <button className='btn2'
          onClick={()=>{
            setEditor(1);
          }}
          >
            <MdOutlineWorkspacePremium/>
            Premium</button>
           </div>
           <div className={theme?'edit-section-black':'edit-section-white'}>
            <Free  />
            </div>
          </div>
          
          :
          <div>
          <div id={theme?'cards2-dark':'cards2-white'} className='cards-2'>
          <button className='btn1' onClick={()=>{
            setEditor(0);
          }}>
            <RiStarSmileLine/>
            Free</button>
          <button className='btn2'
          onClick={()=>{
            setEditor(1);
          }}
          >
            <MdOutlineWorkspacePremium/>
            Premium</button>
           </div>
           <div className={theme?'edit-section-black':'edit-section-white'}>
            <Premium/>
            </div>
          </div>
        }
      </div>

      <section >
                <div className={theme?"footer-dark":"footer-white"} >
                  <span ><a href="https://github.com/Muralikrishnapopuri" target='_blank'><FaGithub/></a>  <a href="https://www.linkedin.com/in/murali-krishna-90b112239/" target='_blank'><FaLinkedin/></a>  <a href="https://www.instagram.com/krishna_orig/" target='_blank'><FaInstagram/></a></span>
                  <h5> © Copyright 2024 &nbsp; Murali krishna. All rights reserved.</h5>
                </div>
        </section>
    </div>
  )
}

export default EasyPolish
