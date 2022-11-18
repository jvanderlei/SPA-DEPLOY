import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

interface SettingsProps {
  setShowSettings: (bool: boolean) => void
}

export function Settings({setShowSettings} : SettingsProps) {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="flex justify-center ">
      <div className="text-left bg-zinc-900 m-8 w-64 p-8 rounded-lg">
        <label>Work Minutes</label>
        <input
          onChange={(event) =>
            settingsInfo?.setWorkMinutes(event.target.valueAsNumber)
          }
          value={settingsInfo?.workMinutes}
          className="w-full text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          type="number"
          name=""
          id=""
        />
        <label>Break Minutes</label>
        <input
          onChange={(event) =>
            settingsInfo?.setBreakMinutes(event.target.valueAsNumber)
          }
          value={settingsInfo?.breakMinutes}
          className="w-full text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          type="number"
          name=""
          id=""
        />
        <div className="flex justify-center items-center">
          <button onClick={() => setShowSettings(false)}
          className="flex bg-brand-500 m-4 p-4 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Timer
          </button>
        </div>
      </div>
    </div>
  );
}
