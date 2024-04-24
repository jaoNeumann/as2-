//src/app/secondPage/page.tsx
"use client"

//state and hook imports
import { useEffect } from "react";
import { useDarkMode } from "../state/darkModeState";

//component imports
import { HookCount } from "../components/hookcount"
import Toggle from "../components/Toggle";
import Window from "../components/Window";
import { SectionTitle } from "../components/SectionTitle/section-title";

//style imports
import "../globals.css";
import "../components/styles/home.css"
import "./pageStyle.css";

export default function Home() {

  const isDark = useDarkMode((state) => { return state.dark })

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#2c2c2c" : "#f5f2d0";
    document.body.style.color = isDark ? "#b3b3b3" : "#111436";
    
  }, [isDark]);

  return (
      
      <main className="container">
      <div className="buttons">
        <a className="btn-primary" href="../">
            ☚ Go back to My Portfolio
        </a>
        <Toggle />
      </div>
      <div className="container-minor">
        <SectionTitle text="Eneable editor mode"/>
        <Window/>
        <Window/>
      </div>
      <div className="container-minior">
        <HookCount/>
      </div>
    </main>
  )
}
