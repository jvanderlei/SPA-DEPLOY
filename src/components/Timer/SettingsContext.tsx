import react from 'react'
type SettingsContextType = {
    workMinutes: number;
    breakMinutes: number;
    setWorkMinutes: (workMinutes: number) => void
    setBreakMinutes: (breakMinutes: number) => void
}

export const SettingsContext = react.createContext<SettingsContextType>({} as SettingsContextType)