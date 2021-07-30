import { Fragment } from "react";
import React, {useState} from "react";

function Profile()
{

    const[loggedIn, setLoggedIn] = useState(false);

    function login(){
        setLoggedIn(true)
    }
    function logout()
    {
        setLoggedIn(false)
    }
    return(
        <Fragment>
            {
                loggedIn?<h1 style={{ textAlign:'center', color:'gray' }}>Welcome Jawad Altaf</h1>
                :<h1 style={{ textAlign:'center', color:'gray' }}>Welcome Guest</h1>
            }
            <div style={{ width:'100%', textAlign:'center' }}>
                <button onClick={() => login()}>Login</button>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </Fragment>
    )
}

export default Profile