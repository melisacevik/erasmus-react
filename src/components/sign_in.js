import { Link } from "react-router-dom"; 

const forgotPass = {
  fontWeight: 'normal', 
  fontSize: '17px',
  color: 'white'
}

const loginCheck = () => {

  var user = sessionStorage.getItem("user");
  if(user == null){
      sessionStorage.setItem("user","");
  }

  var isLogin = false;
      
  const userObject = user.split(",");

  const email = document.getElementById("email").value || 'Email information not found';
  const password = document.getElementById("password").value;

  const text = document.getElementById("text");

  if (email == userObject[0] && password == userObject[1]) {

      text.innerHTML = "The login information is correct!"; 
      text.style.color = "#57e257";
      window.location ="/home";
      isLogin = true;
      sessionStorage.setItem("isLogin", isLogin);


  }
  else {
      text.innerHTML = "The login information is incorrect!";
      text.style.color = "#540404";
  }
}




function signIn() {

    const textStyle = {

        fontFamily: "Poppins",
        fontStyle: "italic",
        fontSize: "16px",
        fontWeight: "00"
    };

    const submitStyle = {
        fontFamily: "Poppins",
        fontStyle: "italic",
        width: "100%"
    }


  return (

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
            
          />
          <div id="emailHelp" style={textStyle} className="text-start text-lg-start">
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
        <div id="signInExp" style={textStyle} className="mb-3 d-flex">
        Please <Link to="/sign_up" style={{textDecoration: "none", color: "#540404"}} className="mx-1 fw-bold"> click </Link> to create an account.
          </div>
        </form>
      

        <div className="d-flex col-3 mb-3" >
        <button type="submit" className="btn btn-dark p-1" style={submitStyle} onClick={() => loginCheck()}>
          Submit
        </button>

        </div>
        <div className="row">
          <div className="col-12 text-start forgotPass"> 
            <Link to="forgotpassword" id="text" style={forgotPass} > Did you forget your password ?   </Link>
          </div>
        </div>

      
    </div>
    </div>
  );
}

export default signIn;
