import { combineReducers } from "redux";
import contactReducer from "./ContactReducer";

//this is a root reducer
export default combineReducers({
    contacts: contactReducer
});