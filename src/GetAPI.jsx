import React,{Fragment, useEffect, useState} from 'react';
import {Table, Button} from 'react-bootstrap';

function GetAPI()
{
    const [data,setData] = useState([]);
    const [name,setName] = useState("");
    const [member_id, setMemberId] = useState("");
    const [userId, setUserId] = useState(null);
    useEffect(()=>{
        getList();
    },[])

    function getList()
    {
        fetch("http://127.0.0.1:8000/api/list").then((result)=>{
            result.json().then((resp) => {
                setData(resp);
                setName(resp[0].name);
                setMemberId(resp[0].member_id);
                setUserId(resp[0].id);
            })  
        })
    }

    function saveUser()
    {
        let userData = {name,member_id};
        fetch("http://127.0.0.1:8000/api/add",{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userData)
        }).then((result)=>{
            result.json().then((resp) =>{
                console.log(resp);
                getList();
            });
        })
    }

    function deleteUser(id)
    {
        fetch(`http://127.0.0.1:8000/api/delete/${id}`,{
            method:"DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getList();
            })
        })
    }

    function updateUser(uid)
    {
        console.log(data[uid-2]);
        setName(data[uid].name);
        setMemberId(data[uid].member_id);
        setUserId(data[uid].id);
    }
    
    function update()
    {
        let item = {name,member_id,userId};
        fetch(`http://127.0.0.1:8000/api/update/${userId}`,{
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result) => {
            result.json().then((res) =>{
                console.log(res);
                getList();
            })
        })
    }

    return(

        <Fragment>
            <h1 style={{ textAlign:'center' }}>Get API in React JS</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Member ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((values,i)=>(
                            <tr key={i}>
                                <td>{values.id}</td>
                                <td>{values.name}</td>
                                <td>{values.member_id}</td>
                                <td>
                                    <Button variant="danger" onClick={() => deleteUser(values.id)}>Delete</Button>&nbsp;
                                    <Button variant="info" onClick={() => updateUser(values.id)}>Update</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> 
            <br/><br/>
            <div style={{ width:"100%", textAlign:"center" }}>
                <form>
                    <input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}/>&nbsp;
                    <input type="number" value={member_id} name="member_id" onChange={(e)=>{setMemberId(e.target.value)}}/>&nbsp;
                    <Button type="button" variant="success" onClick={saveUser}>Save new user</Button>&nbsp;
                    <Button type="button" variant="primary" onClick={update}>Update new user</Button>
                </form>
            </div>
        </Fragment>
    )
}

export default GetAPI;