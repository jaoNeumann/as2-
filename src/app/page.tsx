"use client"
import React, { useEffect } from 'react';
import Header from './components/Header';
import Toggle from "./components/Toggle";
import Window from "./components/Window";

import "./components/styles/home.css";
import './globals.css'

import { useDarkMode } from './state/darkModeState';
import { SectionTitle } from './components/SectionTitle/section-title';
import { Exception } from 'sass';
import { Experience } from './components/Experience/experience';

export default function Home() {

  // const isDark = useDarkMode((state) => { return state.dark })

  // useEffect(() => {
  //   document.body.style.backgroundColor = isDark ? "#292c35" : "#fff";
  // }, [isDark]);

  return (
    
    <main className="container">
      <Header/>
      <Experience/>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>EN-🇺🇸 - Advanced</span>
          <span>PT-🇧🇷 - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Information Systems Bachelors Degree - Universidade Positivo</span>
        </div>
      </div>
      <div className="buttons">
        <div className="social"></div>
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
