import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import axios from 'axios'
function ContextExample(){
    const profiles = useContext(UserContext);
    const [count,setCount] = useState([]);
    useEffect(()=>{
       getData()
        console.log("called")
    },[])
    // useCallback(getData(),[count])
    function getData(){
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
             .then((res)=>{
                 setCount(res.data)
             })
             .catch((err)=>{
                console.log(err.message)
             })
    }
    return(
        <>
        <h1>Context Example</h1>
        {/* <p>{count}</p> */}
        {/* <button onClick={handler}>Click here</button>  */}
        {
            profiles && profiles.map((ele,ind)=>{
                return <img key={ele.id} src={ele.thumbnailUrl} alt='images' />
            })
        }
        
        </>
    )
}
export default ContextExample
