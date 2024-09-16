import React, { useContext, useEffect, useState } from 'react'
import '../Register/Register.css';
import White from "../../assets/images/White.png"
import Black from "../../assets/images/Black.png"
import { store } from '../../App';
import { Link } from 'react-router-dom';
import {onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [theme, setTheme] = useContext(store);
  const navigate = useNavigate();
  const [formValues,setFormValues] = useState({
    email:"",
    password:"",
});

  useEffect(()=>{
    if(theme==null){
      setTheme(false);
    };
    onAuthStateChanged(firebaseAuth,(currentUser) =>{
      if(currentUser){
          navigate("/easypolish");
      }
      
  });
  })
  const handleLogin = async ()=> {
    try{
        const { email, password } = formValues;
        await signInWithEmailAndPassword(firebaseAuth,email,password);
        navigate("/easypolish");
    }
    catch(err){
        console.log(err);
        document.getElementById("error").style.display="block";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML="Invalid Email / Password";
        
    }
};

  return (
    <div className={theme?'register-dark':'register-white'}>
      <div className='theme'>
        
          <Link to="/">
               <div id="nav-item1">
                    <img className='logo' src={theme==0?White:Black} alt="Logo" />
                    <span id={theme?"Site-Name-dark":"Site-Name-white"}>PIXEL POLISH</span>
                </div>

          </Link>
        
          <div className={theme==true?"toggle-white":"toggle-dark"} onClick={()=>{
                  setTheme(!theme);
                  }}>
            <div className={`switch ${theme==0 ? "slide " : ""}`}></div>
          </div>
          </div>
      <div className='top'>

      <main className='register-main'>
        <section className='reg-1'>
      <dotlottie-player className="ani-reg" src="https://lottie.host/9db5a3ac-14dc-4e5d-b011-088c3c28f090/JnLecOVVAm.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
        </section>
        <section id="reg-2" className={theme?'reg-2-dark':'reg-2-white'}>
          <h2 className={theme?'signup-dark':'signup-white'}>Login</h2>
          <div>
            <label className={theme?'label-dark':'label-white'} htmlFor="#Emial">Email</label>
            <input
            name="email" value={formValues.email} onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value,})}
             className={theme?'input-dark':'input-white'} id="Email" type="email" required placeholder='Enter Email' />
            <label className={theme?'label-dark':'label-white'} htmlFor="#Password">Password</label>
            <input
            name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value,})}
              className={theme?'input-dark':'input-white'} type="password" required id="Password" placeholder='Enter Password' />
            <Link to="/register" style={{textDecoration:'none',color:theme?"white":"black",cursor:"pointer",fontSize:'1rem'}} >Don't Have An Account? Register</Link>
            <span style={{textAlign:"center"}} id="error"  ></span>
            <button onClick={handleLogin} className={theme?'btn-dark':'btn-white'}>Login</button>
          </div>
        </section>
      </main>     
      </div>
    </div>
  )
}

export default Login