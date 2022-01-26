import { GET_ALL_TODOS, GET_ALL_USERS } from "../actions/ActionType";

const intitialState ={
    TodoData:{},
    UserList:{},
}

const UserReducer =(state=intitialState,action)=>{
    console.log("action",action);
    const {type,payload}=action;
    switch(type){
        case GET_ALL_TODOS:
            return{
                ...state,
                TodoData:action.TodoData,
            }
        case GET_ALL_USERS:
            return{
                ...state,
                UserList:action.UserList,
            }
        default :
        return state;
    }
}

export default UserReducer;