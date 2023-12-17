import { useEffect, useState } from "react";

interface Props {
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
  questionNumber: number;
}

const Timer = ({ setStop, questionNumber }: Props) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return timer;
};

export default Timer;
