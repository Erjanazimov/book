import {combineReducers} from "redux";
import {listReducer} from "./listReducer";
import {contactReducer} from "./contactReducer";
import {searchReducer} from "./searchReducer";

export const rootReducer = combineReducers({
    listReducer,
    contactReducer,
    searchReducer
})