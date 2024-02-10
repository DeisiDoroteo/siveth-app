import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Ejemplo from './assets/componentes/header.jsx'
import Slider from './assets/componentes/home.jsx'
import './index.css'
import Footer from './assets/componentes/footer.jsx'
import Login from './assets/Modulos/Login.jsx'
import { HelmetProvider } from "react-helmet-async";
import 'react-chatbot-kit/build/main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <App />
   </HelmetProvider>

   
   {/* <span>goaksmdk</span> */}
   {/* <Ejemplo/>
   <Carousel/> 
   <BlogSection/>
    <Footer/>  */}



 
 
  </React.StrictMode>,
)
