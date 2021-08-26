import React, { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

const REQUEST_URL = "https://www.googleapis.com/calendar/v3/calendars/c_7l6dmgacgec619n8akak8irvsg@group.calendar.google.com/events?key=AIzaSyAX-0VgUVQzsnp30HS-pmQERdJ6nacigFU"
var SYNC_TOKEN = ""


function EXPOCalendar(props){
    
    const [events,setEvents] = useState([]);
    const [isBusy,setBusy] = useState(true)
    // var events = []
    useEffect(() => {
        
        axios.get(REQUEST_URL + SYNC_TOKEN).then((res) => {
            
            if(SYNC_TOKEN === ""){
                SYNC_TOKEN = res.data.nextSyncToken
            }
        
            var tmp_events = events
            for(const calendar_event of res.data.items){
                let index = tmp_events.indexOf(findEvent(calendar_event.id))
                if (index > -1){
                    tmp_events[index] = {
                        title: calendar_event.summary,
                        start: new Date(calendar_event.start.dateTime),
                        end: new Date(calendar_event.end.dateTime),
                        id: calendar_event.id
                    }

                }
                else{tmp_events.push({
                    title: calendar_event.summary,
                    start: new Date(calendar_event.start.dateTime),
                    end: new Date(calendar_event.end.dateTime),
                    id: calendar_event.id 
                })}

                
            }
            setEvents(tmp_events);
            setBusy(false)
            

        })
        
    });

    return(
        <div>
            <h1 id="content_header">Calendar</h1>
            {
                isBusy ? (<div>loading..</div>)
                : 
                (<Calendar
                    localizer={localizer}
                    events={events}
                    style={{ minHeight: 300, maxWidth: 600, margin: "auto" }}
                    defaultDate={new Date(2021, 8, 1)}
                    views={['month', 'agenda']}
                    toolbar={false}
                />)
            }
        </div>
    )

}


function findEvent(id){
    return cal_event => cal_event.id == id
}

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })
export default EXPOCalendar