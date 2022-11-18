import { useState } from "react";
import { Pomodoro } from "./components/Pomodoro";
import { Settings } from "./components/Timer/Settings";
import { SettingsContext } from "./components/Timer/SettingsContext";
import { Widget } from "./components/Widget";

export function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(50);
  const [breakMinutes, setBreakMinutes] = useState(10);

  return (
    <>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings setShowSettings={setShowSettings} /> : <Pomodoro setShowSettings={setShowSettings}/>}
      </SettingsContext.Provider>
      <Widget />
    </>
  );
}
