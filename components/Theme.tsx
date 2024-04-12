import React, { useState } from 'react'
import LightTheme from './LightTheme'
import DarkTheme from './DarkTheme'

const Theme = () => {
  const [theme,setTheme] = useState("light")
  return (
    <div>
      {theme === "light" ? <LightTheme setTheme={setTheme}/> : <DarkTheme setTheme={setTheme}/>}
    </div>
  )
}

export default Theme