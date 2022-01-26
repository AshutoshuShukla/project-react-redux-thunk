import axios from 'axios';


export async function getAllTodo(){
    return await axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>{console.log("todoList",response)
    return response;
}).catch((error)=>{
    console.log("Error",error.toJSON());
    return error.toJSON();
});
}

export async function getAllUsers(){
    return await axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{console.log(response)
        return response;
    }).catch((error)=>{
        console.log("Error",error.toJSON());
        return error.toJSON();
    });
}