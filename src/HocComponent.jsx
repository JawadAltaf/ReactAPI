import React,{ Fragment, useState } from 'react';
import {Button} from 'react-bootstrap';

function HocComponent()
{
    return(
        <Fragment>
            <h1 style={{ textAlign:'center' }}>HOC ( High Order Component )</h1>
            <HOCRed cmp={Counter}/>
            <HOCGreen cmp={Counter}/>
            <HOCBlue cmp={Counter}/>
        </Fragment>
    )
}

function HOCRed(props)
{
    return(
        <Fragment>
            <h2 style={{ textAlign:'center', backgroundColor:'red', width:'100%',height:'100px'}}>
                <props.cmp/>
            </h2>
        </Fragment>
    )
}

function HOCGreen(props)
{
    return(
        <Fragment>
            <h2 style={{ textAlign:'center', backgroundColor:'green', width:'100%',height:'100px'}}>
                <props.cmp/>
            </h2>
        </Fragment>
    )
}

function HOCBlue(props)
{
    return(
        <Fragment>
            <h2 style={{ textAlign:'center', backgroundColor:'blue', width:'100%',height:'100px'}}>
                <props.cmp/>
            </h2>
        </Fragment>
    )
}

function Counter()
{
    const [count,setCount] = useState(0);
    return(
        <Fragment>
            <h3 style={{ textAlign:'center' }}>Count : {count}</h3>
            <div style={{ width:'100%',textAlign:'center' }}>
                <Button type="button" variant="success" onClick={() => setCount(count+1)}>Update</Button>
            </div>
        </Fragment>
    )
}

export { HocComponent, Counter, HOCRed};