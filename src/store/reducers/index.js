import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import UserReducer from "./UserReducer";

const  rootReducer=combineReducers({todoReducer,UserReducer});

export default rootReducer;