//src/app/page.tsx
"use client"
import React, { useEffect } from 'react';

//state and hook inports
import { useDarkMode } from './state/darkModeState';

//component imports
import { HookCount } from "./components/hookcount"
import Toggle from "./components/Toggle";
import Window from "./components/Window";
import Header from './components/Header';
import { Info } from './components/Information/information';
import { Experience } from './components/Experience/experience';
import { EmailIcon } from './components/icons/email-icon';
import { SocialBtns } from './components/social-btns/social-btns';

//style imports
import "./components/styles/home.css"
import './globals.css'
import "./components/Toggle/";


export default function Home() {

  const isDark = useDarkMode((state) => { return state.dark })

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#2c2c2c" : "#f5f2d0";
    document.body.style.color = isDark ? "#b3b3b3" : "#111436";
    
  }, [isDark]);
  
  return ( 
    <main className="container">
      <Toggle/>
      <Header/>
      <Experience/>
      <Info/>
      <div className="buttons">
        <SocialBtns/>
        <a className="btn-primary" href="mailto:jaopnb15@gmail.com">
          Contact me  
          <EmailIcon/>
        </a>
        <a className="btn-primary" href="./secondPage">
          Go to the next page
        </a>
      </div>
    </main>
  )
}
