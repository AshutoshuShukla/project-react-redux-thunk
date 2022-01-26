import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../store/actions/index'
//import { showDeafult } from '../store/actions/todoActions';
const Todo = () => {
  const dispatch =useDispatch();
  const DefaultValues =useSelector((state)=>{return state.todoReducer.preloaded})
  const AllTodoList =useSelector((state)=>{return state.UserReducer.TodoData})
  useEffect(()=>{
  action.showDeafult(dispatch);
  action.retriveAllTodosInfo(dispatch);
  },[])
  console.log("from redux",DefaultValues);
  console.log("TodoList",AllTodoList)
  return <div>Add To cart</div>;
};

export default Todo;
