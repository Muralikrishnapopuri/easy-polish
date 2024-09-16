import React, { useContext, useEffect, useState } from 'react'
import White from "../../assets/images/White.png"
import Black from "../../assets/images/Black.png"
import './Home.css'
import { store } from '../../App';
import { TbBrightnessDown } from "react-icons/tb";
import { TbBrightnessDownFilled } from "react-icons/tb";
import { IoIosColorWand } from "react-icons/io";
import { IoMdColorWand } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { LuScale3D } from "react-icons/lu";
import { FaMagic } from "react-icons/fa";
import { MdFlipCameraAndroid } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  const [theme, setTheme] = useContext(store);
  if(theme==null){
    setTheme(false);
  }
  return (
    <div className={theme?"Home-dark":"Home-white"} >
        <header>
            <nav className='navbar'>
                <div id="nav-item1">
                    <img className='logo' src={theme==0?White:Black} alt="Logo" />
                    <span id={theme?"Site-Name-dark":"Site-Name-white"}>PIXEL POLISH</span>
                </div>

                <div id="nav-item2">
                <div className={theme?"entry-btns-dark":"entry-btns-white"}>
                  <Link to="/register" style={{textDecoration:"none"}}><span id="signup">Sign Up</span></Link>
                  <Link to="/login" style={{textDecoration:"none"}}><span id='login'>Login</span></Link>
                </div>
                <div className={theme==true?"toggle-white":"toggle-dark"} onClick={()=>{

                    setTheme(!theme);
                }}>
                      <div className={`switch ${theme==0 ? "slide " : ""}`}></div>
                </div>
                </div>

            </nav>
            <div className={theme?"entry-btns-2-dark":"entry-btns-2-white"}>
                  <Link to="/register" style={{textDecoration:"none"}}><span id="signup">Sign Up</span></Link>
                  <Link to="/login" style={{textDecoration:"none"}}><span id='login'>Login</span></Link>
                </div>
            <section className='description'>
              <div className='editor-sec-1'>
                <h1 className={theme?"des-title-dark":"des-title-white"}>Online Photo Editor for Everyone</h1>
                <p style={{color:theme?"white":'black'}}>Our online photo editor offers everything you need to enhance and edit photos effortlessly. Experience simple photo editing online for free!</p>
                <Link to="/register"><button className={theme?"des-btn-dark":'des-btn-white'}>Edit Photo For Free</button></Link>
              </div>
              <div className='editor-sec-2'>
               <dotlottie-player className="animation-1" src="https://lottie.host/cdb327c4-b761-4877-b50c-7e6ecafda65b/qL4452MvFN.json" background="transparent" speed="1"    loop autoplay></dotlottie-player>
              </div>
            </section>
            <section className={theme?'features-dark':'features-white'}>
              <h4>Discover Popular Features</h4>
              <IoIosArrowDown/>
              <div className='features-sub'>
                <div className={theme?'f-card-dark':'f-card-white'}>
                <FaMagic/>
                  <h3>Enhance HDR</h3>
                </div>
                <div className={theme?'f-card-dark':'f-card-white'}>
                  {
                    theme?
                    <IoIosColorWand/>
                    :
                    <IoMdColorWand/>
                  }
                  <h3>Saturation/Contrast</h3>
                </div>
                <div className={theme?'f-card-dark':'f-card-white'}>
                    <LuScale3D/>

                  <h3>Graycale</h3>
                </div>
                <div className={theme?'f-card-dark':'f-card-white'}>
                  <MdFlipCameraAndroid/>
                
                  <h3>Rotate/Flips</h3>
                </div>
              </div>
            </section>
            <section className={theme?'des-2-dark':"des-2-white"}>
            <div className='a-2'>
             <dotlottie-player className="animation-2" src="https://lottie.host/15b70359-3cab-4fd7-bde6-169edb4d1705/cpK5fp0elw.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
            </div>
             
             <div className={theme?"matter-dark":"matter-white"}>
              <h3>Simple and fast Online Image Editor</h3>
              <p>All the tools you need for professional photo editing at your fingertips.

                <br/><strong>Powerful & easy-to-use:</strong> A robust photo editor like Photoshop online but with fewer learning curves.

                <br/><strong>A complete suite of photo editing tools:</strong> From basic adjustments like brightness and contrast to advanced editing features like retouching portraits, you can do it all with Fotor.</p>
             </div>
            </section>
            <section >
              <div className={theme?"footer-dark":"footer-white"} >
                <span ><a href="https://github.com/Muralikrishnapopuri" target='_blank'><FaGithub/></a>  <a href="https://www.linkedin.com/in/murali-krishna-90b112239/" target='_blank'><FaLinkedin/></a>  <a href="https://www.instagram.com/krishna_orig/" target='_blank'><FaInstagram/></a></span>
                <h5> © Copyright 2024 &nbsp; Murali krishna. All rights reserved.</h5>
              </div>
            </section>
        </header>
    </div>
  )
}

export default Home