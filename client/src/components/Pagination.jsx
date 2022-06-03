import React from "react";

export default function Pagination({pokesPerPage, pokemonsAll,paginate}) {
    const pageNumbers = [];

    for (let p =0 ; p<= Math.ceil(pokemonsAll/pokesPerPage); p++) {
        pageNumbers.push(p+1)
    }

    

    return (
        <nav>
            <ul>
                {pageNumbers?.map(e => (
                    <li>
                    <a onClick={() => {paginate(e)}} >{e}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}