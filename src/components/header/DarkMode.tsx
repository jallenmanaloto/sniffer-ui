"use client"

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark');
    }

  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState: boolean) => {
      const newState = !prevState;
      if (newState) {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }

      return newState;
    })
  };

  return (
    <div className="mode-container">
      {isDarkMode
        ? <MoonStar color="#14b8a6" className="cursor-pointer" onClick={toggleDarkMode} />
        : <Sun className="text-teal-700 cursor-pointer" onClick={toggleDarkMode} />
      }
    </div>
  )
}
