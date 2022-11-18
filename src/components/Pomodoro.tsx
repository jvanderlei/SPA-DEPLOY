import { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PauseButton } from "./Timer/PauseButton";
import { PlayButton } from "./Timer/PlayButton";
import { SettingsButton } from "./Timer/SettingsButton";
import { SettingsContext } from "./Timer/SettingsContext";

interface PomodoroProps {
  setShowSettings: (bool: boolean) => void;
}

export function Pomodoro({ setShowSettings }: PomodoroProps) {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const settingsInfo = useContext(SettingsContext);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function initPomodoro() {
    secondsLeftRef.current = settingsInfo?.workMinutes || 0 * 60;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    initPomodoro();

    function switchMode() {
      const nextMode = modeRef.current == "work" ? "break" : "work";
      const nextSeconds = (nextMode === 'work' ? settingsInfo?.workMinutes: settingsInfo?.breakMinutes) || 0 * 60
      setMode(nextMode);
      modeRef.current = nextMode
      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds
    }

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return null;
      }
      if (secondsLeftRef.current == 0) {
        return switchMode();
      }

      tick();
    }, 1);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo?.workMinutes || 0 * 60
      : settingsInfo?.breakMinutes || 0 * 60;
  
  const percentage = Math.round(secondsLeft / totalSeconds) * 100;

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  // if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className="pt-12 w-80 m-auto text-center">
      <CircularProgressbar
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? "#8257e6" : "green",
          trailColor: "rgba(255, 255, 255, 0.5)",
        })}
        value={percentage}
        text={minutes + ":" + seconds}
      />
      <div>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <div className="flex justify-center items-center">
        <SettingsButton setShowSettings={setShowSettings} />
      </div>
    </div>
  );
}
