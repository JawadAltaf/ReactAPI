import React from "react";
import { Fragment } from "react";
import GetAPI from "./GetAPI";
// import ReactRouting from "./ReactRouting";
// import {HocComponent, Counter} from "./HocComponent";
// import RefinFunctionComponent from "./RefinFunctionComponent";
// import BootstrapTable from "./BootstrapTable";
// import RefinReact from "./RefinReact";
// import CallFunction from "./CallFunction";
// import DidMountUpdate from "./DidMountUpdate";
// import StyleType from "./StyleTypes";
// import FormHandle from "./FormHandle";
// import HideShow from "./HideShow";
// import Profile from "./Profile";
// import UseEffect from "./UseEffect";

function Student()
{
    // const [data,setData] = useState(null);
    // const [print,setPrint]= useState(false);
    // function getValue(val)
    // {
    //     setData(val.target.value)
    //     setPrint(false)
    // }

    // function getData()
    // {
    //     alert("Call a function from parent Student Component")
    // }

    // function parentAlert(data){
    //     console.log(data);
    //     alert("hello " + data.name)
    // }
    return(
        <Fragment>
            {/* {
                print?
                    <h1 style={{ textAlign:'center', color:'purple' }}>Hello {data}</h1>
               :null
            }  */}
            {/* <div style={{ textAlign:'center', width:'100%', marginBottom:'10px' }}>
                <input type="text" onChange={getValue}/>
            </div>
            <div style={{ textAlign:'center',width:'100%'}}>
                <button style={{ cursor:'pointer'}} onClick={() => {setPrint(true)}}>Print Date</button>
            </div> */}

            {/* <HideShow/> */}
            {/* <FormHandle/> */}
            {/* <Profile/> */}
            {/* <CallFunction data={getData}/> */}
            {/* <DidMountUpdate/> */}
            {/* <UseEffect/> */}
            {/* <StyleType/> */}
            {/* <BootstrapTable name={parentAlert}/> */}
            {/* <RefinReact/> */}
            {/* <RefinFunctionComponent/> */}
            {/* <HocComponent/> */}
            {/* <ReactRouting/> */}
            <GetAPI/>
        </Fragment>
    )
}

export default Student