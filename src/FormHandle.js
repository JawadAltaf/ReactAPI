import { Fragment } from "react";
import React, {useState} from "react";

function FormHandle()
{
    const [name,setName] = useState("");
    const [tnc,setTnc] = useState(false);
    const [interest,setInterest] = useState("");


    function getFormData(e)
    {
        console.log(name,tnc,interest)
        e.preventDefault();
    }

    return(
        <Fragment>
            <h1 style={{ textAlign:'center', color:'purple', marginBottom:'8px' }}>Form Handle in React JS</h1>
            <form style={{ textAlign:'center' }} onSubmit={getFormData}>
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/><br/>
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Options</option>
                    <option>Banana</option>
                    <option>Orange</option>
                </select><br/>
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /> <span>Accept terms and conditions</span><br/>
                <button type="submit">Submit</button>
            </form>
        </Fragment>
    )
}

export default FormHandle