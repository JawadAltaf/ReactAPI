import React, { Component, Fragment } from 'react'

export default class DidMountUpdate extends Component {

    constructor(){
        super();
        this.state ={
            Count:0
        }
        console.log('constructor')
    }

    componentDidUpdate(preProps, preState, snapshot){
        console.log('componentDidUpdate',preState.Count,this.state.Count)
        if(preState.Count === this.state.Count){
            alert("The count value is same ")
        }

    }

    render() {
        return (
            <Fragment>
                <h1 style={{ textAlign:'center' }}>Component Did Update {this.state.Count}</h1>
                <div style={{ width:'100%', textAlign:'center' }}>
                    <button type="button" onClick={() => this.setState({Count:1})}>Update did mount</button>
                </div>
            </Fragment>
        )
    }
}
