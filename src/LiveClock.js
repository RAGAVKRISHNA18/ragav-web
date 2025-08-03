import React, { useEffect, useState } from 'react';

function LiveClock({ className }) {
  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  }

  return <p className={className}>{time}</p>;
}

export default LiveClock; // ✅ THIS LINE IS IMPORTANT
