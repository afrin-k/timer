import React,{useState,useEffect} from "react";

const Timer = ({ duration }) => {

    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time-1000);
        },1000);
    }, [time]);

    const getFormattedTime = (milliseconds) => {
        let t_seconds=parseInt(Math.floor(time/1000));
        let t_minutes=parseInt(Math.floor(t_seconds/60));
        let t_hours=parseInt(Math.floor(t_minutes/60));

        let seconds = parseInt(t_seconds%60);
        let minutes = parseInt(t_minutes%60);
        let hours = parseInt(t_hours%24);

        return `${hours}: ${minutes}: ${seconds}`

    };

    return <div>{getFormattedTime(time)}</div>;
};

export default Timer;