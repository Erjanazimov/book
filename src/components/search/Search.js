import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editLocalEdit, searchChange, searchOn} from "../../redux/actions";
import {toast} from "react-toastify";

function Search(){
    const dispatch = useDispatch()
    const nameSearch = useSelector(state => state.searchReducer.name)
    function searchHandle(e){
        const target = e.target.value;
        dispatch(searchChange(target))
    }

    function searchBtn(){
        const data = localStorage.getItem("data");
        const parse = JSON.parse(data);
        const search = parse.filter(item => item.name === nameSearch);
        if (search.length){
            dispatch(editLocalEdit(search))
            dispatch(searchOn())
        } else {
            toast.error("Нет такого контакта")
        }
    }

    return(
        <div className="wd mt-4">
        <div className="input-group">
            <input onChange={searchHandle} type="text" className="form-control" placeholder="Поиск по Имени" value={nameSearch}/>
                <button onClick={searchBtn} className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Найти</button>
        </div>
        </div>
    )
}

export default Search;