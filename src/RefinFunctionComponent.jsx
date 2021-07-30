import React ,{Fragment, useRef} from 'react';
import {Button} from 'react-bootstrap';

function RefinFunctionComponent(){

    let inputRef = useRef(null);
    let inputRef2 = useRef(null);

    function submitForm(e)
    {
        e.preventDefault();
        console.log("input field 1 value : ",inputRef.current.value);
        console.log("input field 2 value : ",inputRef2.current.value);
        let input3 = document.getElementById('input3').value;
        console.log("input field 3 value : ",input3);
    }

    return(
        <Fragment>
            <h1 style={{ width:'100%',textAlign:'center',marginTop:'20px' }}>Uncontrolled component</h1>
            <form style={{ width:'100%',textAlign:'center' }} onSubmit={submitForm}>
                <input ref={inputRef} type="text"/><br/><br/>
                <input ref={inputRef2} type="text"/><br/><br/>
                <input id="input3" type="text"/><br/><br/>
                <Button type="submit" variant="success">Submit</Button>
            </form>
        </Fragment>
    );
}
export default RefinFunctionComponent;