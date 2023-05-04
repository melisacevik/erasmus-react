import { useState} from "react"
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
    
   const navigate = useNavigate();

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
    const [input, setInput] = useState("");


    const handleOnChange = (event) => {
    
        const input_name = event.target.name; 
        const input_value = event.target.value; 

        setInput(values => ({...values, [input_name]: input_value }))
                                                //isim: Mert
      
    }

    const submitForm = function(event) {
        event.preventDefault();
        sessionStorage.setItem("contactInfo", JSON.stringify(input));
        navigate("/form/document");
    }



return(
    <>
    <div className="container text-start">
    <form className="g-3 needs-validation" novalidate method="get" onSubmit={submitForm}>

    <div className="row mt-2 text-start">
            <div className="col-12 col-lg-5 d-flex flex column mx-auto pt-2" > 
                <div className="col-12 d-flex flex-column mx-auto text-center" > 
                <h5 style={{color: "gray"}}> Contact Information</h5>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label for="country" className="countryText"> Country: <span className="col-2" style={requiredFiled }> * </span></label> <br/>
                    <input type="text" id="country" name="country" className=" country col-4 form-control" style={inputBorder} required onChange={handleOnChange} /><br/>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label for="city" className="cityText"> City: <span className="col-2" style={requiredFiled} > * </span></label> <br/>
                    <input type="text" id="city" name="city" className="city col-4 form-control" style={inputBorder } required onChange={handleOnChange} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label for="district" className="districtText"> District: <span className="col-2" style={requiredFiled }> * </span></label> <br/>
                    <input type="text" id="district" name="district" className=" district col-4 form-control" style={inputBorder} required onChange={handleOnChange} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label for="neighborhood" className="neighborhoodText"> Neighborhood: <span className=" col-2" style={requiredFiled}> * </span></label> <br/>
                    <input type="text" id="neighborhood" name="neighborhood" className=" neighborhood col-4 form-control" style={inputBorder} required onChange={handleOnChange}/><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label for="street" className="streetText"> Street: <span className=" col-2" style={requiredFiled}> * </span></label> <br/>
                    <input type="text" id="street" name="street" className=" street col-4 form-control" style={inputBorder}  required onChange={handleOnChange}/><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label for="zipCode" className="zipCodeText"> Zip Code:  <span className=" col-2" style={requiredFiled}> * </span></label> <br/>
                    <p className="ExpP mb-3"> If there is no postal code, please write 0. </p>
                    <input type="text" id="zipCode" name="zipCode" className="zipCode col-4 form-control" style={inputBorder } required onChange={handleOnChange}/><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="col-4 col-lg-6 d-flex justify-content-end align-content-end"> 
            <input type="submit" value="Submit" id="save_btn_id" /> 
        </div>

    </form>
    
    <div className="row justify-content-end align-items-end">

        <div className="col-4 col-lg-4 d-flex text-end"> 
            <p style={{fontStyle: "italic",color:"gray"}} > Previous page: Document Information </p>
        </div>

        <div className="col-4 col-lg-12 d-flex flex-column justify-content-end align-content-end text-end"> 
            <p style={{fontStyle: "italic", color:"gray"}}> </p>
        </div>

    </div>
    


</div>
    
    </>

);

}


export default ContactInfo;