import React, { useEffect } from 'react'
import { ScheduleXCalendar,useCalendarApp } from "@schedule-x/react";
import { createViewMonthAgenda } from "@schedule-x/calendar";
import '@schedule-x/theme-default/dist/calendar.css'


const MyCalendar = () => {
  const calendar=useCalendarApp({
    views:[createViewMonthAgenda()],
    events:[
      {
        id:1,
        title:"Meeting",
        start:"2025-01-14",
        end:"2025-01-14"
      }
    ],
    callbacks:{
      onClickAgendaDate(date) {
        console.log('onClickAgendaDate', date) // e.g. 2024-01-01
      },
    }
  });
  
  
  return (
    <div className=' p-2 width-full height-full'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}

export default MyCalendar

