import {SEARCH, SEARCH_OFF, SEARCH_ON} from "./type";


const initialState = {
    name: "",
    search: false
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case SEARCH:
            return{
                ...state,
                name: action.text
            }
        case SEARCH_ON:
            return{
                ...state,
                search: true
            }
        case SEARCH_OFF:
            return{
                ...state,
                search: false
            }
        default:
            return {
                ...state
            }

    }
}