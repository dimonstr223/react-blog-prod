import { useContext, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

export interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)

    if (localStorageTheme) {
      document.body.className = localStorageTheme
    } else {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.LIGHT)
    }

  }, [])

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)

    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  return { theme, toggleTheme }
}

export default useTheme
