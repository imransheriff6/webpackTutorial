const initialState = {
    todos:[]
}

const todoReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:state.todos.concat(action.payload)
            }
        case 'TOGGLE_TODO':
            return{
                ...state,
                todos:state
            }
        default:return state
    }
}

export default todoReducer