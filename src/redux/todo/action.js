export const addTodo = (data) =>{
    return{
        type:"ADD_TODO",
        payload:data
    }
}

export const toggleTodo = (id) =>{
    return{
        type:"TOGGLE_TODO",
        payload:id
    }
}
export const consoleLog = (prop) =>{
    return prop
}