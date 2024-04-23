"use client"
import React, { useEffect } from 'react';
import Header from './components/Header';
import Toggle from "./components/Toggle";
import Window from "./components/Window";

import "./components/styles/home.css";
import './globals.css'

import { useDarkMode } from './state/darkModeState';

export default function Home() {

  // const isDark = useDarkMode((state) => { return state.dark })

  // useEffect(() => {
  //   document.body.style.backgroundColor = isDark ? "#292c35" : "#fff";
  // }, [isDark]);

  return (
    
    <main className="container">
      <Header/>
      
      <div className="infos">
        <div className="experience">
          <h3>Experience</h3>
          <p>1 year working as technical support</p>
          <div className="experience-time"></div>
        </div>
        <h3>Languages</h3>
        <div className="languages-info">
          <span>EN-🇺🇸 - Advanced</span>
          <span> PT-🇧🇷 - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Information Systems Bachelors Degree - Universidade Positivo</span>
        </div>
        <div className="buttons">
          <div className="social"></div>
        </div>
        <button>Contact me!</button>
      </div>
      {/* <Toggle /> */}
      {/* <div className="container-minor">
        <Window />
        <Window />
        <Window />
        <Window />
      </div> */}
    </main>
  )
}
