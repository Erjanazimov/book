import React from "react";

function Pagination({countersPerPage, totalCounters, paginate}){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCounters / countersPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <a href="#" className="page-link" onClick={() => paginate(number)}>{number} </a>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Pagination;