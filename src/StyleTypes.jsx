import React, {Fragment} from 'react';
import './style.css';
import style from './custom.module.css';
import {Button} from 'react-bootstrap';
function StyleType(){
    return(
        <Fragment>
            <h1 className="primary">Style type 1</h1>
            <h1 style={{ textAlign:'center',color:'red', backgroundColor:'black', padding:'12px' }}>Style type 2</h1>
            <h1 className={style.success}>Style type 3</h1>
            <Button onClick={() => alert("hello")}>Click me</Button>
        </Fragment>
    )
}
export default StyleType;