import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import SignUp from "./components/sign_up";
import SignIn from "./components/sign_in";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/about";
import Form from "./components/form";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Layout from "./components/layout";
import PersInfo from "./components/PersInfo";
import EduInfo from "./components/EduInfo";
import ContactInfo from "./components/ContactInfo";
import Home from "./components/home";
import ForgotPass from "./components/forgotpassword";
import FormSuccess from "./components/formSuccess";
import Document from "./components/DocumentInfo";
import Profile from "./components/Profile";
import ChangePass from "./components/ChangePass";

function App() {
  return <div className="App"> 
     
    <BrowserRouter> 
    
        <Routes>
          
          <Route index element={<SignIn />}/>
          <Route path="sign_up" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPass />} />
          <Route path="/" element={<Layout/>} >      
            <Route path="about" element={<About/>}/>
            <Route path="home" element={<Home/>}/>

            <Route path="form" element={<Form/>}>
            
            <Route path="personalinfo" element={<PersInfo/>}/>
            <Route path="ChangePass" element={<ChangePass />}/>
            <Route path="educationinfo" element={<EduInfo/>}/>
            <Route path="contactinfo" element={<ContactInfo/>}/>
            <Route path="document" element={<Document />}/>
            <Route path="formsuccess" element={<FormSuccess/>}/>
          </Route>
          
          <Route path="contact" element={<Contact/>}/>
          <Route path="faq" element={<Faq />} />
          <Route path="profile" element={<Profile/>}/>
        </Route>
        
        </Routes>
        
        </BrowserRouter>

  </div>
  
}

export default App;
