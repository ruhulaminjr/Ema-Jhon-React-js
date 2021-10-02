import React from 'react';
import './search.css'
const Search = ({searchHandler}) => {
    return (
        <div className="search">
            <input type="text" onChange={searchHandler}/>
        </div>
    );
};

export default Search;