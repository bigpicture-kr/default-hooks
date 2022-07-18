import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

interface DateType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountDown = (deadline: string): [DateType, boolean] => {
  const [finish, setFinish] = useState(false);
  const [time, setTime] = useState<DateType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(deadline);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const days = Math.floor(difference / DAY);
      const hours = Math.floor((difference % DAY) / HOUR);
      const minutes = Math.floor((difference % HOUR) / MINUTE);
      const seconds = Math.floor((difference % MINUTE) / SECOND);

      setTime({
        days,
        hours,
        minutes,
        seconds
      });

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        setFinish(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return [time, finish];
};

export default useCountDown;
