"use client"
import { createContext, useEffect, useState } from "react"

export const THEME_LIGHT = "light"
const THEME_DARK = "dark"
const KEY_LOCALSTORAGE = "theme-mode"

const initValue = () =>
{
    const initTheme = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE))
    return initTheme ? initTheme.mode : THEME_DARK
}
const updateTheme = (preValue) =>
{
    const valueTheme = preValue === THEME_DARK ? THEME_LIGHT : THEME_DARK
    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify({ mode: valueTheme }))
    return valueTheme
}




export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) =>
{
    const [mode, setMode] = useState(THEME_DARK)
    const toogle = () => setMode(preValue => updateTheme(preValue))

    useEffect(() =>
    {
        setMode(initValue())
    }, [])


    return (
        <ThemeContext.Provider value={{ toogle, mode }}>
            <div className={`theme ${mode}`}> {children}</div>
        </ThemeContext.Provider>
    )
}
