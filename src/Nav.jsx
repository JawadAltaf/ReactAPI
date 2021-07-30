import React,{ Fragment } from 'react';
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <Fragment>
            <ul style={{ width:'100%',textAlign:'center',listStyleType:'none' }}>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/about">About Page</Link>
                </li>
            </ul>
        </Fragment>
    )
}
export default Nav;