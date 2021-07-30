import React,{useState, useEffect, Fragment} from 'react';

function UseEffect(){

  const[data,setData] = useState(10);
  const[count,setCount] = useState(100);
  useEffect(() => {
    alert("data state called")
  },[data])

  useEffect(() => {
    console.log('count is' + count)
  },[count])

  return(
    <Fragment>
      <h1 style={{ textAlign:'center'}}>UseEffect Count {count}</h1>
      <div style={{ width:'100%', textAlign:'center' }}>
        <button type="button" onClick={() => setData(data+1)}>Data</button>
        <button type="button" onClick={() => setCount(count+1)}>Count</button>
      </div>
    </Fragment>
  );
}

export default UseEffect;