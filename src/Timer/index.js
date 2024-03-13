import React,{useState,useEffect} from "react";

const Timer = ({duration}) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const interval = setInterval(() => {
          setTime((time) => {
            if (time <= 0) {
                clearInterval(interval);
                return 0;
              }
            return time-1000;
          });
        },1000);
          return () => clearInterval(interval);
        }, [time]);

      const getFormattedTime = (milliseconds) => {
        let t_seconds=parseInt(Math.floor(time/1000));
        let t_minutes=parseInt(Math.floor(t_seconds/60));
        let t_hours=parseInt(Math.floor(t_minutes/60));

        let seconds = parseInt(t_seconds%60);
        let minutes = parseInt(t_minutes%60);
        let hours = parseInt(t_hours%24);

        let text = "happy birthday!";

        if(seconds !== 0)
            return `${hours}: ${minutes}: ${seconds}`
        else
            return `${text}`
    };

    return <div>
        <h1>{getFormattedTime(time)}</h1>
        </div>;
};

export default Timer;