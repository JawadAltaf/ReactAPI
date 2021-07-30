import React,{Fragment} from 'react';
import './style.css';
import {Table} from 'react-bootstrap';

function BootstrapTable(props){
    const students = [
        {name:'jawad',email:'jawad@gmail.com', 
        address:[
            { Hn:'567', city:'FSD', country:'Pakistan' },
            { Hn:'676', city:'ISB', country:'Pakistan' },
            { Hn:'678', city:'LHE', country:'Pakistan' },
            { Hn:'435', city:'KHA', country:'Pakistan' }
        ]
    },
        {name:'ammad',email:'ammad@gmail.com',
        address:[
            { Hn:'567', city:'FSD', country:'Pakistan' },
            { Hn:'676', city:'ISB', country:'Pakistan' },
            { Hn:'678', city:'LHE', country:'Pakistan' },
            { Hn:'435', city:'KHA', country:'Pakistan' }
        ]
    },
        {name:'zahid',email:'zahid@gmail.com',
        address:[
            { Hn:'567', city:'FSD', country:'Pakistan' },
            { Hn:'676', city:'ISB', country:'Pakistan' },
            { Hn:'678', city:'LHE', country:'Pakistan' },
            { Hn:'435', city:'KHA', country:'Pakistan' }
        ]
    }
]

const myName ={name:'jawad altaf', fname:'altaf ur rehman', educattion:'BA'}
    return(
        <Fragment>
            <h1 className='primary'>Bootstrap table</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((items,i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>H.No</th>
                                                <th>City</th>
                                                <th>Country</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        items.address.map((data,j) =>
                                        <tr key={j}>
                                            <td>{data.Hn}</td>
                                            <td>{data.city}</td>
                                            <td>{data.country}</td>
                                        </tr>
                                        )
                                    }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <div style={{ width:'100%', textAlign:'center', marginTop:'10px' }}>
                <button onClick={() => props.name(myName)}>Click me</button>
            </div>
        </Fragment>
    )
}

export default BootstrapTable;