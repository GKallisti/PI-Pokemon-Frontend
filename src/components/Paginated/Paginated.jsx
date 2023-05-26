import React from "react";
import styles from "./Paginated.module.css";

export default function Paginated({ pokemonPerPage, allPokemons, paginated, currentPage }){
    const pageNumbers = [];
    for(let i = 0; i < Math.ceil(allPokemons / pokemonPerPage); i++){
        pageNumbers.push(i + 1);
    };
    return (
        <div className={styles.paginatedBody}>
            <button onClick={() => paginated(currentPage - 1)} > Prev </button>
            {
                pageNumbers &&
                pageNumbers.map(number => (
                    <button
                    key={number}
                    className={`${styles.pagination} ${number === currentPage ? styles.active : ''}`}
                    onClick={() => paginated(number)}
                  >
                    {number}
                  </button>
                ))}
                <button onClick={() => paginated(currentPage + 1)}> Next </button>
                
        </div>
    )
};