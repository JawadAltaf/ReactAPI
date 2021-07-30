import { Fragment } from "react";
import React, {useState} from "react";

function HideShow()
{
    const [status,setStatus] = useState(false)
    return(
        <Fragment>
            {
                status?
                <h1 style={{ textAlign:'center' }}>Hide and Show </h1>
                :null
            }
            <div style={{ width:'100%', textAlign:'center' }}>
                <button style={{ cursor:'pointer' }} onClick={() => setStatus(false)}>Hide</button>
                <button style={{ cursor:'pointer' }} onClick={() => setStatus(true)}>Show</button>
                <button style={{ cursor:'pointer' }} onClick={() => setStatus(!status)}>Toggle</button>
            </div>
        </Fragment>
    )
}

export default HideShow