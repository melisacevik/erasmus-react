import { useState} from "react";
import { useNavigate } from "react-router-dom";
const uploadList = {
           
    fontStyle: "italic",
    fontWeight: "bold",
    color : "firebrick",

}

const classBorder={
    border: "2px solid black",
    borderRadius: "15px",
    borderColor: "#CACFD2",
}

const ExpP = {
    fontSize: "12px",
    padding: "1px",
}


const Document = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState("");

    const handleOnChange = (event) => {

        const input_name = event.target.name; 
        const input_value = event.target.value; 

        setInput(values => ({...values, [input_name]: input_value }))
                                                //isim: Mert
      
    }

    const submitForm = function(event) {
        event.preventDefault();
        sessionStorage.setItem("documentInfo", JSON.stringify(input));
        navigate("/form/formSuccess");
    }

    return(
        <>  
            
             <main className="aboutContactMain " >
                <div className="container mt-3"> 
                <form onSubmit={submitForm}> 
                    <div className="row d-flex  h-100 w-100 p-4" style={classBorder}> 
                        <div className="col-12 d-flex flex-column "  > 
                            <div className="col-12 d-flex flex-column mx-auto" > 
                                <label for="document" className="document" style={{fontWeight: 'bold', fontStyle: 'italic', color: 'grey', fontSize:'large'}}> Upload Files </label> <br/>

                                <p style={uploadList} className="text-start"> Upload CV </p>
                                
                                <p style={ExpP} className="text-start"> Please upload your CV in PDF format. </p>
                                    <input type="file" id="document1" name="CV_document" className=" document col-12" onChange={handleOnChange} /><br/>

                                <p style={uploadList} className="text-start"> Upload Motivation Letter</p>
                                    <input type="file" id="document2" name="Letter_document" className=" document col-12" onChange={handleOnChange} /> <br/>

                                <p style={uploadList} className="text-start"> Upload Passport Copy</p>
                                    <input type="file" id="document3" name="Passp_document" className=" document col-12" onChange={handleOnChange} /> <br/>

                                <p style={uploadList} className="text-start"> Upload Residence Information</p>
                                    <input type="file" id="document4" name="Residence_document" className=" document col-12"  onChange={handleOnChange} /> <br/>

                                <p style={uploadList} className="text-start" > Upload Diploma</p>
                                    <input type="file" id="document5" name="Diploma_document" className=" document col-12"  onChange={handleOnChange} /> <br/>

                                <p style={uploadList} className="text-start" > Upload English Proficiency Certificate</p>
                                    <input type="file" id="document6" name="Certificate_document" className=" document col-12" onChange={handleOnChange} /> <br/>
                                <div className="row d-flex justify-content-center align-items-center mt-3">
    
                                    <div className="col-12 col-lg-6 d-flex justify-content-center align-content-center mb-3"> 
                                        <input type="submit" value="Upload" id="save_btn_id" /> 
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </main>
            
            
        </>
    );
}
export default Document;