import React from 'react'
import { useCalendlyEventListener, InlineWidget} from "react-calendly";

function Calendly() {
    useCalendlyEventListener({
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => console.log(e.data.payload),
      });
  return (
    <div className='calendar' >

<InlineWidget url="https://calendly.com/mankacade/30min"  style={{height:"50%"}}/>
      
    </div>
  )
}

export default Calendly
