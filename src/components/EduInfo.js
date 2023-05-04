
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EduInfo = () => {

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
        sessionStorage.setItem("educationInfo", JSON.stringify(input));
        navigate("/form/contactinfo");
    }

return(
    <>
    <div className="container text-start ">
    <form className="g-3 needs-validation" novalidate method="get" onSubmit={submitForm}>

    <div className="row mt-2 text-start">
            <div className="col-12 col-lg-5 d-flex flex column mx-auto pt-2" > 
                <div className="col-12 d-flex flex-column mx-auto text-center" > 
                <h5 style={{color: "gray"}}> Education Information</h5>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label for="university" className="universityText"> University: <span className=" col-2" style={requiredFiled} > * </span></label> <br/>
                    <input type="text" id="university" name="university" className="university col-8 form-control" style={inputBorder} required onChange={handleOnChange} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label for="department" className="departmentText"> Department: <span className=" col-2" style={requiredFiled} > * </span></label> <br/>
                    <input type="text" id="department" name="department" className=" department col-8 form-control" style={inputBorder} required onChange={handleOnChange}/><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" >
                    <label for="graduation" className="graduation"> Graduation Status: <span className="col-2 " style={requiredFiled} > * </span> </label> <br/>
                    <select name="graduation" id="graduation" className=" graduation col-5 form-control" style={{padding: "3px", border: "0", borderBottom: "1px solid"}} required onChange={handleOnChange}> 
                        <option value="" selected disabled hidden> </option>
                        <option value="yes"> Yes </option>                              
                        <option value="no"> No </option>
                    </select> 
                    <br/> <br/>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto mt-1 mb-0" > 
                    <label for="gdate" className="graduationDateText"> Graduation Date: <span className=" col-2" style={requiredFiled} > * </span></label> <br/>
                    <input type="date" id="gDate" name="gDate" className="birthDate col-4 form-control" required style={inputBorder } onChange={handleOnChange}/><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto mt-0" > 
                    <label for="GPA" className="GPA_Text"> GPA: <span className=" col-2" style={requiredFiled}> * </span></label> <br/>
                    <input type="number" id="GPA" name="GPA" className=" GPA col-1 form-control"  style={inputBorder} required onChange={handleOnChange} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>
        <div className="col-4 col-lg-6 d-flex justify-content-end align-content-end"> 
            <input type="submit" value="Next" id="save_btn_id" /> 
        </div>

    </form>
    
    <div className="row d-flex justify-content-center align-items-start">

        <div className="col-4 col-lg-4 d-flex text-start"> 
            <p style={{fontStyle: "italic",color:"gray"}} > Previous page: Personal Information </p>
        </div>



        <div className="col-4 col-lg-4 d-flex flex-column justify-content-end align-content-end text-end"> 
            <p style={{fontStyle: "italic", color:"gray"}}> Next page: Contact Information </p>
        </div>

    </div>
    


</div>
    
    </>

);

}


export default EduInfo;