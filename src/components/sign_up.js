import React from 'react';
import { Link } from "react-router-dom"; 

function signUp() {
  
  function isEmailAddress(str) {
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);
 }

  const passwordControl = () => {

    const user = [document.getElementById("email").value , document.getElementById("password").value];
  
    const rePassword = document.getElementById("rePassword").value;
  
    const text = document.getElementById("text");
  
    if(user[1] == rePassword  && isEmailAddress(user[0]) == true && user[1].length > 8 ){
      text.innerHTML = "Account Created!";
      text.style.color = "#57e257";
      sessionStorage.setItem("user" , user);
      window.location="/";
      
    }
    else{
      text.innerHTML = "Passwords do not match or enter more than 8 long character for password. ";
      text.style.color = "#540404";
    }


  }

  const textStyle = {

      fontFamily: "Poppins",
      fontStyle: "italic",
      fontSize: "18px",
      fontWeight: "00"
  };

  const submitStyle = {
      fontFamily: "Poppins",
      fontStyle: "italic",
      width: "100%"
  }


return (
<>
  <div className="container-fluid backgroundImage">
  <div className="col-4 formStyle"> 
  
    <form>
      <div className="row">
      <div className="col-12">
      <div className="mb-3 ">
        <label htmlFor="email" className="form-label d-flex fw-bold" style={textStyle}>
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          minLength={8}
        />
        <div id="emailHelp" style={textStyle} className="text-center text-lg-start">
          We'll never share your email with anyone else.
        </div>
      </div>
      </div>
      </div>
      <div className="mb-3">
      <div className="row">
      <div className="col-12">
        <label htmlFor="password" className="form-label d-flex fw-bold" style={textStyle}>
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      </div>
      </div>
      <div className="mb-3">
      <div className="row">
      <div className="col-12">
        <label htmlFor="rePassword" className="form-label d-flex fw-bold" style={textStyle}>
          Re-enter your password
        </label>
        <input
          type="password"
          className="form-control"
          id="rePassword"
        />
      </div>
      </div>
      </div>
      <div id="signInExp" style={textStyle} className="mb-3 d-flex">
        Please <Link to="/" style={{textDecoration: "none", color: "#540404"}} className="mx-1 fw-bold"> click </Link> to enter your account.
      </div>
    </form>
      <div className="row">
      <div className="col-6">
      <button type="submit" className="btn btn-dark p-1" style={submitStyle} onClick={() => passwordControl()}>
        Submit
      </button>
      </div>
      </div>
      <div className="row">
      <div className="col-12 text-start"> 
      <p id="text" style={{marginTop: '20px' , fontWeight: 'bold', fontSize: '17px'}} > </p>
      </div>
      </div>

  </div>
  </div>
  </>
);
}

export default signUp;
