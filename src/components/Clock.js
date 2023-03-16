import { useEffect, useState } from "react";

const Clock = () => {

    let [ time, setTime ] = useState(new Date());

    useEffect(() => {
        // set an interval to update the time to a new date object in 1 second
        // stored in variable so we can remove when this component refreshes
        let update = setInterval(() => {
            setTime(new Date());
        }, 1000);
        // return value (function) of useEffect is called on unmount
        return () => {
            // lambda calls clearInterval on unmount before next interval is set
            clearInterval(update);
        }
    });

    return (
        <div className="clock">
            <p className="time">{time.toLocaleTimeString()}</p>
        </div>
    )

        

}

export default Clock;