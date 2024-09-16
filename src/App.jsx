import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { createContext, useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import EasyPolish from './components/EasyPolish/EasyPolish';
import Free from './components/Free/Free';


export const store = createContext();
function App() {
  const [token,setToken] =useState(null);
  const [theme,setTheme]=useState();
  const [User,setUser]=useState();

  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <store.Provider value={[token,setToken,theme,setTheme,User,setUser]}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/easypolish" element={<EasyPolish/>} />
      <Route path='/free' element={<Free/>} />
    </Routes>
    </BrowserRouter>
    </store.Provider>
    </CookiesProvider>
  )
}

export default App
