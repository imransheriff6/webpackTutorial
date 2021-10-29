import React, { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import {fetchingData} from '../redux/fetchingData/action'
function ReduxHook(){
    const [input,setInput] = useState('');
    const todos = useSelector((state)=>state.fetchDataReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchingData())
    },[])
    const handler = (e) =>{
        setInput(e.target.value)
    }
    return(
        <>
        <input type='text' onChange={handler} value={input}></input>
        {
            todos.loading && <h1>Loading.....</h1>
        }
            {
                todos && todos.data.map((t,ind)=>{
                    return <h3>{t.title}</h3>
                })
            }
        </>
    )
}
export default ReduxHook