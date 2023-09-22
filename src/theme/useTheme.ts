import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

export interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
    return { theme, toggleTheme }
}

export default useTheme
