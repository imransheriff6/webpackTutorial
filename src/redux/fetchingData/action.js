import axios from "axios"
export const loadingData = () =>{
    return {
        type:"SHOW_LOADING"
    }
}
export const successData = (data) =>{
    return{
        type:"FETCHING_SUCCESS",
        payload:data
    }
}
export const errorData = (error)=>{
    return{
        type:"FETCHING_ERROR",
        payload:error
    }
}
export const fetchingData = () =>{
    return function(dispatch){
        dispatch(loadingData())
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            dispatch(successData(res.data));
        })
        .catch((err)=>{
            dispatch(errorData(err))
        })
    }
}