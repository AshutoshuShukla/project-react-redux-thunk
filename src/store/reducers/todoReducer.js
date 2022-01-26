import {ADD_TODO,REMOVE_TODO,SHOW_DEFAULT} from '../actions/ActionType'
const intitialState={
  list:[],
  preloaded:[{id:1,data:"heelo"},{id:2,data:"world"}]
}
const todoReducer = (state=intitialState,action) => {
  switch(action.type){

    case ADD_TODO:
      const{id,data}=action.payload;
      return {
        ...state,
        list:[
          ...state.list,
          {
            id:id,
            data:data
          }
        ]
      }
      case REMOVE_TODO:
        const newList=state.list.filter((element)=>{return element.id !== action.id})
        
        return{
          ...state,
          list:newList,
        }
      case SHOW_DEFAULT:
        return{
          ...state,
          data:intitialState.preloaded,
        }
      default :{
        return state;
      }
  }
};

export default todoReducer;
