import React from "react";
import './Footer.css';

const Footer = ({totalPages, page, paginationHandler}) => {
    return (
        <footer className="footer">
            <p>Rows per page: 10 </p>

            <form className="form"><i className="arrow down"/></form>

            <p>21-30 of 100</p>
            <div>
                <button disabled={page <= 1} onClick={() => paginationHandler(-1)}>prev</button>
                {page}
                <button disabled={page >= totalPages} onClick={() => paginationHandler(1)}>next</button>
            </div>
        </footer>
    )
}

export {Footer};
