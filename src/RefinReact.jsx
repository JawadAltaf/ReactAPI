import React, { Component, Fragment, createRef } from 'react'
import {Button} from 'react-bootstrap'

class RefinReact extends Component {

    constructor(){
        super();
        this.inputRef = createRef();
    }

    componentDidMount(){
        // console.log(this.inputRef.current.value='1000');
    }

    getVal()
    {
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor="yellow"
    }

    render() {
        return (
            <Fragment>
                <h1 style={{ textAlign:'center' }}>Ref in React JS</h1>
                <div style={{ width:'100%', textAlign:'center' }}>
                    <input type="text" ref={this.inputRef} /> &nbsp;
                    <Button variant="info" onClick={() => this.getVal()}>Check Ref</Button>
                </div>
            </Fragment>
        )
    }
}
export default RefinReact;