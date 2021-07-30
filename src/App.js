import {useState} from 'react';
import './App.css';
import { Fragment } from 'react';

function App() {
  const [data,setData]=useState(0);

  function updateData()
  {
    setData(data+1)
  }
  return (
    <Fragment>
      <h1 style={{ textAlign:'center' }}>{data}</h1>
      <div style={{ textAlign:'center', width:'100%'}}>
        <button style={{ cursor:'pointer' }} onClick={updateData}>Click Me</button>
      </div>
    </Fragment>
  );
}

export default App;
