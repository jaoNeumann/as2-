"use client"
import React, { ReactNode, useState } from "react"
import "./window.css"
import { useDarkMode } from "@/app/state/darkModeState"

const Window = (): ReactNode => {

  const isDark = useDarkMode((state) => { return state.dark })
  const [editMode, setOnEditMode] = useState(true)
  
  const backgorundColor = isDark ? "#b6b6b6" : "#000080";
  const textColor = isDark ? "#000080" : "#b6b6b6";

  return (
    <div className="window" style={{background: backgorundColor, color: textColor }}>
      <p>Edit mode</p>
      <h3>{editMode ? "ON" :  "OFF"}</h3>
      <button className="window-button" onClick={() => {setOnEditMode(!editMode)}}>
        ON/OFF
      </button>
    </div>
  )
}

export default Window