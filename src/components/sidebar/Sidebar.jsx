import React from 'react'
import Calendar from '../calendar/Calendar'
import SearchBar from '../searchbar/SearchBar'
import Widget from '../widget/Widget'
import './sidebar.sass'

function Sidebar() {
    return (
        <div className="sidebar">
            <Calendar/>
            <SearchBar/>
            <Widget/>
            <Widget/>
        </div>
    )
}

export default Sidebar
