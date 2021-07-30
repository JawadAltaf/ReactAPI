import React from 'react'
import {Fragment} from 'react'

function CallFunction(props)
{
    return(
        <Fragment>
            <h1 style={{ textAlign:'center' }}>Pass a function as parameter</h1>
            <div style={{ width:'100%', textAlign:'center' }}>
                <button onClick={()=> props.data()}>Call a function from parent</button>
            </div>
        </Fragment>
    )
}

export default CallFunction