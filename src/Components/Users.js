import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../store/actions/index';
import CustomizedTables from './CustomizedTables';

const Users = () => {

    const dispatch=useDispatch();
    const UserList = useSelector((state)=>state.UserReducer.UserList)
    console.log("from redux",UserList)
    useEffect(()=>{
        action.retriveAllUsersInfo(dispatch);
    },[])

    const refinedColumnData=()=>{
        return [
            {
                label:"Username",
                id:"username",
            },
            {
                label:"Name",
                id:"name",
            },
            {
                label:"Phone",
                id:"phone",
            },
            {
                label:"Email",
                id:"email",
            },
            {
                label:"Website",
                id:"website",
            },
        ]
    }
  return Object.keys(UserList).length !==0 ?
  (

  <React.Fragment>
  <h3 style={{ paddingTop:"5em",display:'flex',justifyContent:"center"}}>UserList</h3>
  <CustomizedTables tableData={UserList} refinedColumnData={refinedColumnData()}/>
  </React.Fragment>
    ):<div/>
};

export default Users;
