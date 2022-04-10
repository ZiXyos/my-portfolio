import { useEffect, useState } from "react"


export const ClockComponent = () => {

    const[time, setTime] = useState<number>(Date.now());

    useEffect(() => {

        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            { new Date(time).toString().split('GMT')[0] }
        </div>
    )
}