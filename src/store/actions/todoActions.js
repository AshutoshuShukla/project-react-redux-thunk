import { ADD_TODO, REMOVE_TODO, SHOW_DEFAULT } from "./ActionType"

export const addTodo =(data)=>{
    return {
        type:ADD_TODO,
        payload :{
            id:new Date().getTime().toString(),
            data:data,
        }
    }
}
export const removeTodo=(id)=>{
    return{
        tyoe:REMOVE_TODO,
        id:id
    }
}

export const showDeafult=()=>{
    return {
        type:SHOW_DEFAULT,
    }
}