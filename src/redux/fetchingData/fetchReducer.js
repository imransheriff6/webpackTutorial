const initialState = {
    loading:false,
    data:[],
    error:''
}
const fetchDataReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'SHOW_LOADING':
            return{
                ...state,
                loading:true
            }
        case 'FETCHING_SUCCESS':
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }
        case 'FETCHING_ERROR':
            return{
                ...state,
                loading:false,
                data:[],
                error:action.payload.message
            }
        default:return state
    }
}
export default fetchDataReducer