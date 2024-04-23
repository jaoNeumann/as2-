"use client"
import React, { useEffect } from 'react';
import Header from './components/Header';
import Toggle from "./components/Toggle";
import Window from "./components/Window";
import { Info } from './components/Information/information';
import { Experience } from './components/Experience/experience';
import Image from "next/image";

import "./components/styles/home.css";
import './globals.css'

import { useDarkMode } from './state/darkModeState';
import { SectionTitle } from './components/SectionTitle/section-title';
import { Exception } from 'sass';
import { EmailIcon } from './components/icons/email-icon';
import { SocialBtns } from './components/social-btns/social-btns';

export default function Home() {

  // const isDark = useDarkMode((state) => { return state.dark })

  // useEffect(() => {
  //   document.body.style.backgroundColor = isDark ? "#292c35" : "#fff";
  // }, [isDark]);

  return (
    
    <main className="container">
      <Header/>
      <Experience/>
      <Info/>
      <div className="buttons">
        <SocialBtns/>
        <a className="btn-primary" href="mailto:jaopnb15@gmail.com">
          Contact me  
          <EmailIcon/>
        </a>
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
