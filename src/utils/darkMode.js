import { useEffect, useState } from "react";

export const DarkMode = () => {
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            window.document.documentElement.classList.add('dark')
          } else {
            window.document.documentElement.classList.remove('dark')
          }
    }, [localStorage.theme])

    // const [theme, setTheme] = useState(localStorage.theme);
    // const colorTheme = theme === 'dark' ? 'light' : 'dark';

    // useEffect(() => {
    //     const root = window.document.documentElement;

    //     root.classList.remove(colorTheme);
    //     root.classList.add(theme);
    //     localStorage.setItem('theme', theme)
    // }, [theme, colorTheme]);

    // return [colorTheme, setTheme]
}