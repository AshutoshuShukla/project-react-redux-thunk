import {GET_ALL_TODOS,GET_ALL_USERS} from '../../store/actions/ActionType';
import { getAllTodo,getAllUsers } from '../../Servicers/UserService';

//FOR TODO
export const retriveAllTodos = (TodoData) =>{
    return {
        type:GET_ALL_TODOS,
        TodoData,
    };
};

export const retriveAllTodosInfo =(dispatch) =>{
    const result = getAllTodo();
    result.then((response)=>{
    dispatch(retriveAllTodos(response))
    })
}

//FOR USERS

export const retriveAllUsers = (UserList) =>{
    return {
        type:GET_ALL_USERS,
        UserList,
    };
};

export const  retriveAllUsersInfo =(dispatch) =>{
     const result =  getAllUsers();
    result.then((response)=>{
    dispatch(retriveAllUsers(response))
    })
}
