import React, { Component, Fragment } from 'react'
export default class User extends Component {
    constructor(){
        super();
        this.state={
            data:'Jawad'
        }
    }

    updataData(){
        this.setState({data:'Jawad altaf'})
    }



    render() {
        return (
            <Fragment>
                <h1 style={{ textAlign:'center', color:'green' }}>{this.state.data}</h1>
                <div style={{ width:'100%', textAlign:'center' }}>
                    <button style={{ cursor:'pointer' }} onClick={() => this.updataData()}>Click me</button>
                </div>
            </Fragment>
        )
    }
}
