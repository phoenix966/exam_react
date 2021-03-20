import React from 'react'
import SearchBar from '../searchbar/SearchBar'
import Widget from '../widget/Widget'
import './sidebar.sass'

function Sidebar() {
    return (
        <div className="sidebar">
            <SearchBar/>
            <Widget/>
            <Widget/>
            <Widget/>
            <Widget/>
        </div>
    )
}

export default Sidebar
