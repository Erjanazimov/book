import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editLocalEdit, getList, searchoff} from "../../redux/actions";
import Contact from "./listContact/Contact";
import Pagination from "./listContact/Pagination";

function List(){
    const dispatch = useDispatch()
    const contact = useSelector(state => state.listReducer.listGet);
    const search = useSelector(state => state.searchReducer.search)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(10);

    const lastCounterIndex = currentPage * countriesPerPage;
    const firstCounterIndex = lastCounterIndex - countriesPerPage;
    const currentCountry = contact.slice(firstCounterIndex, lastCounterIndex);
    useEffect(() => {
        dispatch(getList())
    },[])

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const searchEnd = () => {
        const data = localStorage.getItem("data");
        const parse = JSON.parse(data);
        dispatch(editLocalEdit(parse));
        dispatch(searchoff())
    }
     return(
        <div>
                <Contact contact={currentCountry}/>
            <div className="pt-3">
                {search ? <button onClick={searchEnd} className="btn btn-outline-dark form-control"> Назад</button> :
                    <Pagination
                        countersPerPage={countriesPerPage}
                        totalCounters={contact.length}
                        paginate={paginate}
                    />
                }
            </div>
        </div>
    )
}

export default List;
