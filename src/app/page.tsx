"use client"
import React, { useEffect } from 'react';
import Toggle from "./components/Toggle";
import Window from "./components/Window";
import './globals.scss'

import { useDarkMode } from './state/darkModeState';

export default function Home() {

  const isDark = useDarkMode((state) => { return state.dark })

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#292c35" : "#fff";
  }, [isDark]);

  return (
    <main>
      <Toggle />

      {/* <Image
        src="/vercel.svg"
        alt="Vercel logo"
        width={100}
        heigth={24}
        priority
      /> */}

      <div className='container'>
        <Window />
        <Window />
        <Window />
        <Window />
      </div>
    </main>
  )
}
