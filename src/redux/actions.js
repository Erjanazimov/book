import {toast} from "react-toastify";
import {
    CONTACT_EDIT,
    EDIT_LOCAL_CONTACT,
    EVENTUALLY,
    GET_LIST,
    LOADER_DISPLAY_OFF,
    LOADER_DISPLAY_ON,
    SEARCH, SEARCH_OFF, SEARCH_ON
} from "./type";

export const getList = () => {
    return async dispatch => {
        dispatch(loaderOff())
        try {
            const response = await fetch("https://demo.sibers.com/users");
            const jsonData = await response.json();
            if(!localStorage.getItem("data")) {
                localStorage.setItem("data", JSON.stringify(jsonData));
            }
            const data = localStorage.getItem("data");
            const parse = JSON.parse(data)
            dispatch({
                type: GET_LIST,
                data: parse,
            })

            dispatch(loaderOn())
        } catch (err){
            toast.error(`Ошибка API код: ${err}`)
        }
    }
}

export const loaderOff = () => {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export const loaderOn = () => {
    return{
        type: LOADER_DISPLAY_ON
    }
}


export const contactEdit = (search) => {
    return {
        type: CONTACT_EDIT,
        search
    }
}

export const eventually = (dataset, value) => {
    return{
        type: EVENTUALLY,
        dataset,
        value
    }
}

export const editLocalEdit = (data) => {
    return{
        type: EDIT_LOCAL_CONTACT,
        data
    }
}

export const searchChange = (text) => {
    return{
        type: SEARCH,
        text
    }
}

export const searchOn = () => {
    return{
        type: SEARCH_ON
    }
}

export const searchoff = () => {
    return{
        type: SEARCH_OFF
    }
}