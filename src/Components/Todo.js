import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../store/actions/index'
import CheckboxList from './CheckboxList';
const Todo = () => {
  const dispatch =useDispatch();
  const AllTodoList =useSelector((state)=>state.UserReducer.TodoData)
  useEffect(()=>{
  action.retriveAllTodosInfo(dispatch);
  },[])
  //console.log("from redux",DefaultValues);
  console.log("AllTodoList",AllTodoList.data)
  return Object.keys(AllTodoList).length !==0 ?
  (

  <React.Fragment>
  <h3 style={{ paddingTop:"5em",display:'flex',justifyContent:"center"}}>TodoList</h3>
  <CheckboxList data={AllTodoList.data}/>
  </React.Fragment>
    ):<div/>
};

export default Todo;
