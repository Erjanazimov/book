import {CONTACT_EDIT, EVENTUALLY} from "./type";

const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type){
        case CONTACT_EDIT:
            return {
                ...state,
                name: action.search.name,
                username: action.search.username,
                email: action.search.email,
                phone: action.search.phone,
                website: action.search.website,
            }

        case EVENTUALLY:
            let stateCopy = {
                ...state,
            }
            stateCopy[action.dataset] = action.value;
            return {
                ...stateCopy
            }
        default:
            return{
                ...state
            }
    }
}