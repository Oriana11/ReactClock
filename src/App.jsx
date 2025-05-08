import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [skyState, setSkyState] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
      updateSkyState(newTime);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const updateSkyState = (currentTime) => {
    const hours = currentTime.getHours();
    if (hours >= 5 && hours < 8) {
      setSkyState("dawn");
    } else if (hours >= 8 && hours < 17) {
      setSkyState("day");
    } else if (hours >= 17 && hours < 20) {
      setSkyState("dusk");
    } else {
      setSkyState("night");
    }
  };

  const formattedTime = time.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <div className={`sky-container ${skyState}`}>
      <div className="sky-elements">
        <div className="sun"></div>
        <div className="moon"></div>
        <div className="stars"></div>
      </div>
      <div className="content">
        <h2>React Clock</h2>
        <p className="time">{formattedTime}</p>
        <div className="clouds">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
          <div className="cloud cloud-5"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
