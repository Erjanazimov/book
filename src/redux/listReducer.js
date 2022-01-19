import {EDIT_LOCAL_CONTACT, GET_LIST, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON} from "./type";

const initialState = {
    listGet: [],
    loader: false
}

export const listReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_LIST:
            return {
                ...state,
                listGet: action.data
            }

        case EDIT_LOCAL_CONTACT:
            return {
                ...state,
                listGet: action.data
            }

        case LOADER_DISPLAY_ON:
            return {
                ...state,
                loader: true
            }

        case LOADER_DISPLAY_OFF:
            return {
                ...state,
                loader: false
            }
        default:
            return{
                ...state
            }
    }
}