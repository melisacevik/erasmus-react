import { Link , useNavigate} from "react-router-dom";
import { useState, useEffect} from 'react';
import logOut from './sidebar';

const PersInfo = () => {
    const navigate= useNavigate();
    
    const requiredFiled = {
        color: "red",
        paddingLeft: "10px"
    }

    const inputBorder = {
        border: 0,
        borderBottom: "1px solid" 
    }

    const classBorder = {
        border: "2px solid black",
        borderRadius: "15px",
        borderColor: "#CACFD2",

    }
    const buttonStyle={
        backgroundColor: "0d6efd",
        
    }


    const [ isLogin , setIsLogin] = useState(false);
    
     const [ mail, setMail] = useState('');

    useEffect(() => {
        
        const loginControl = sessionStorage.getItem("isLogin");
        const userControl = sessionStorage.getItem("user");
        

        if( loginControl == "true" && userControl !== ""){
            setIsLogin(true);
            let userInfo = userControl.split(","); 
            let formMail = userInfo[0];
            setMail(formMail);

        }else{
            setIsLogin(false);
        }
       
      }, []);


      const [input, setInput] = useState("");


      const handleOnChange = (event) => {
  
          const input_name = event.target.name; 
          const input_value = event.target.value; 
  
          setInput(values => ({...values, [input_name]: input_value }))
                                                  //isim: Mert
        
      }
  
      const submitForm = function(event) {
          event.preventDefault();
  
          sessionStorage.setItem("personalInfo", JSON.stringify(input));
          navigate("/form/educationinfo");
  
      }

      const [selectedValue, setSelectedValue] = useState("");
      const handleDisability = (event) => {
        setSelectedValue(event.target.value);
      };

      function logOut(){

        sessionStorage.setItem("isLogin" , false);
        sessionStorage.setItem("user","");
        sessionStorage.setItem("personalInfo","");
        sessionStorage.setItem("educationInfo","");
        sessionStorage.setItem("contactInfo","");
        sessionStorage.setItem("documentInfo", "");

        window.location = "/";
        
      }

return(
    <>
    <div className="container text-start ">
    <form className="g-3 needs-validation" novalidate method="get" action="uploadFiles.html" onSubmit={submitForm}>

        <div className="row mt-2">
            <div className=" col-12 col-lg-8 d-flex align-items-center justify-content-center mx-auto" style={classBorder}>
                <Link className="navbar-brand" to="https://global.khas.edu.tr/" target="_blank"> <img src="https://global.khas.edu.tr/wp-content/uploads/sites/49/2022/09/EEO.png" alt="Global" width="300px" /></Link>
            </div>
        </div>
        

        <div className="row mt-2">
            <div className="col-12 col-lg-8 d-flex flex-column align-items-center justify-content-center mx-auto" style= {classBorder}> 
                <div className="col-12 d-flex flex-column">
                <h5 className="mt-3"> Erasmus Program Application Form </h5>
                <p className="mb-3"> Please fill in the following fields to apply for the program.</p> <hr/>
                </div>
                <hr/>
            
                <div className="col-12  d-flex mx-auto ">

                    { isLogin ?  <> <p id="formMail" className="formMail"> {mail} </p><Link to="/" className="form_button formMail" type="button" onClick={() => logOut()}> Change Account </Link></> :   
                    <><p className="appFormDefault"> Please sign in. </p><Link to="/" className="form_button appFormDefault" type="button"> Login in</Link></>}
                  
                </div>
                <div className="col-12 d-flex flex-column text_files">
                    <p className="text-start"> After you log in, the information associated with your account is saved when you upload the files and submit this form. The email address you entered is only a part of your response.</p>
                    <p style={requiredFiled}> * Required Field </p>
                </div>
        </div>
        </div>

        <div className="row mt-2 text-center">
            <div className="col-12 col-lg-8 d-flex flex column mx-auto pt-2" > 
                <div className="col-12 d-flex flex-column mx-auto" > 
                <h5 style={{color: "gray"}}> Personal Information</h5>
                </div>
            </div>
        </div>

        <div className="row mt-2 ">
            <div className="col-12 col-lg-6 d-flex mx-auto pt-2" style={classBorder} > 
                <div className="col-12  d-flex flex-column  " > 
                <label htmlFor="email" className="emailText"> Email: <span className="col-2" style={requiredFiled} > * </span> </label> <br/>
                <input type="email" id="email" name="email" className=" email col-8 form-control" style={inputBorder} required pattern=".+@.+.com" 
                onChange={handleOnChange} 
                /><br />
                <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="phone" className="phoneText"> Phone: <span className=" col-2" style={requiredFiled}> * </span></label>
                    <p className="ExpP"> e.g. : 05061089291 </p>
                    <input type="phone" id="phone" name="phone" className="phone col-8 form-control" style={inputBorder} required 
                    onChange={handleOnChange}
                    /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="name" className="nameText"> Name: <span className="col-2"  style={requiredFiled}> * </span></label> <br/>
                    <input type="text" id="name" name="name" className=" name col-8 form-control" style={inputBorder} required 
                        onChange={handleOnChange}
                    /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="lastName" className="lastNameText"> Last Name: <span className="col-2"  style={requiredFiled} > * </span></label> <br/>
                    <input type="text" id="lastName" name="lastName" className=" lastName col-8 form-control" style={inputBorder} required onChange={handleOnChange} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="bdate" className="birthDateText"> Birth Date: <span className=" col-2"  style={requiredFiled}> * </span></label> <br/>
                    <input type="date" id="bDate" name="bDate" className="birthDate col-4 form-control" style={inputBorder} required onChange={handleOnChange} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" >
                    <label htmlFor="gender" className="genderText"> Gender: <span className="col-2"  style={requiredFiled}> * </span> </label> <br/>
                    <select name="gender" id="gender" className=" gender col-5 form-control" style={inputBorder} required onChange={handleOnChange} > 
                        
                        <option value="" selected disabled hidden> </option>
                        <option value="female"> Female </option>
                        <option value="male"> Male </option>
                    </select>
                    <br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="nationality" className="nationalText"> Nationality: <span className="col-2"  style={requiredFiled}> * </span></label> <br/>
                    <input type="text" id="nationality" name="nationality" className=" nationality col-8 form-control" style={inputBorder} required onChange={handleOnChange} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>



        <div className="row mt-2">
            <div className="col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="secondNationality" className="2nd_NationalText"> 2nd Nationality:</label> <br/>
                    <input type="text" id="secondNationality" name="secondNationality" className=" secondNationality col-8" style={inputBorder} onChange={handleOnChange} /><br/>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="IDnumber" className="IDnumberText"> ID Number: <span className="col-2"  style={requiredFiled}> *</span></label> <br/>
                    <input type="number" id="IDnumber" name="IDnumber" className=" IDnumber col-8 form-control" style={inputBorder} required onChange={handleOnChange} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>


        <div className="row mt-2 mb-4">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="disability" className="disabilityText"> Disability Condition:  </label> <br/>
                    <select name="disability" id="disability" className="disability col-5 form-control" style={inputBorder}

                    onChange={e => { handleDisability(e); handleOnChange(e) }}

                     > 
                        
                        <option value="" selected disabled hidden> </option>
                        <option value="yes"> Yes </option>
                        <option value="no"> No </option>
                    </select> <br/>
                    {selectedValue === "yes" && (
                        <><label htmlFor="expDisability" className="expDisabilityText hiddenDisa"> Disability Explanation: <span className=" col-2 " style={requiredFiled}> * </span> </label><br /><textarea type="text" id="expDisability" name="expDisability" className=" expDisability col-8 hiddenDisa form-control" style={inputBorder} required onChange={handleOnChange}> </textarea><br /></>
                        )}
                   
                </div>

            </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-end align-content-center "  style={buttonStyle}> 
            <input type="submit" value="Next" id="save_btn_id" />
        </div>
    </form>
    <div className="row d-flex justify-content-center align-items-center">
    


        <div className="col-12 col-lg-12 d-flex flex-column justify-content-center align-content-center text-end"> 
        <p style={{fontStyle: "italic", color: "gray"}}> Next page: Education Information </p>
    </div>

    </div>
    


</div>
    
    </>

);

}


export default PersInfo;