import React from 'react'
import './searchbar.sass'
import {FaSearch} from 'react-icons/fa'

function SearchBar() {
    return (
        <form className="form">
            <div className="form__wrap">
                <input className="form__input" type="text" placeholder='Search'/>
                <span><FaSearch/></span>
            </div>
        </form>
    )
}

export default SearchBar
