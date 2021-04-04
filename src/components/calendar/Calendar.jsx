import './calendar.sass'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'

function Calendar() {
    return (
        <div className="calendar">
            <div className="calendar__header">
                <p className="calendar__text"><span><FaArrowAltCircleLeft/></span>April<span><FaArrowAltCircleRight/></span></p>
                <p className="calendar__text"><span><FaArrowAltCircleLeft/></span>2021 Year<span><FaArrowAltCircleRight/></span></p>
            </div>
            <div className="calendar__grid">
                <div className="calendar__box calendar__box--mix">Sun</div>
                <div className="calendar__box calendar__box--mix">Mon</div>
                <div className="calendar__box calendar__box--mix">Tue</div>
                <div className="calendar__box calendar__box--mix">Wed</div>
                <div className="calendar__box calendar__box--mix">Thu</div>
                <div className="calendar__box calendar__box--mix">Fri</div>
                <div className="calendar__box calendar__box--mix">Sat</div>
                <div className="calendar__box"></div>
                <div className="calendar__box"></div>
                <div className="calendar__box"></div>
                <div className="calendar__box">1</div>
                <div className="calendar__box">2</div>
                <div className="calendar__box">3</div>
                <div className="calendar__box">4</div>
                <div className="calendar__box">5</div>
                <div className="calendar__box active">6</div>
                <div className="calendar__box">7</div>
                <div className="calendar__box">8</div>
                <div className="calendar__box">9</div>
                <div className="calendar__box">10</div>
                <div className="calendar__box">11</div>
                <div className="calendar__box">12</div>
                <div className="calendar__box">13</div>
                <div className="calendar__box">14</div>
                <div className="calendar__box">15</div>
                <div className="calendar__box">16</div>
                <div className="calendar__box">17</div>
                <div className="calendar__box">18</div>
                <div className="calendar__box">19</div>
                <div className="calendar__box">20</div>
                <div className="calendar__box">21</div>
                <div className="calendar__box">22</div>
                <div className="calendar__box">23</div>
                <div className="calendar__box">24</div>
                <div className="calendar__box">25</div>
                <div className="calendar__box">26</div>
                <div className="calendar__box">27</div>
                <div className="calendar__box">28</div>
                <div className="calendar__box">29</div>
                <div className="calendar__box">30</div>
                <div className="calendar__box">31</div>
                <div className="calendar__box"></div>
            </div>
        </div>
    )
}

export default Calendar
