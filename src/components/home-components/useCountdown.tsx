import { useEffect, useState } from "react";

const targetDate = new Date("2025-02-19T00:00:00").getTime();

const useCountdown = () => {
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(targetDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getDays = () => Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const getHours = () => Math.floor((timeLeft / (1000 * 60)) % 24);
    const getMinutes = () => Math.floor((timeLeft / (1000 * 60)) % 60);

    return { Today: getDays(), Hours: getHours(), minutes: getMinutes() };
};

export default useCountdown;
