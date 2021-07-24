import React from "react";

const SearchBar = (props) => {

    return (
        <form action="/" method="get" onSubmit={ e => e.preventDefault()}>
            <label htmlFor="header-search">
                <span className="visually-hidden">Search for practitioner</span>
            </label>
            <input  value={props.searchQuery} 
                    onChange={ e => props.setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search for a provider"
                    name="s" 
            />
    </form>
    )
}


export default SearchBar;

