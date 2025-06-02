import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    return <div className='search'>
        <div>
            <img src="Vector.svg" alt="search" />

            <input type="text"
            placeholder='search thousands of Movie'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    </div>
}

export default Search