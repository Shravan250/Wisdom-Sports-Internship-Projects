import React from 'react'
import Intro from '../components/Intro/Intro'
import MyCalendar from '../components/calender/CalenderComponent'

const CalendarPage = () => {
  return (
    <div className="flex flex-row">
      <div className="flex w-1/2">
        <Intro />
      </div>
      <div className="flex flex-col w-1/2 gap-3 ">
      <MyCalendar/>
      </div>
    </div>
  )
}

export default CalendarPage
