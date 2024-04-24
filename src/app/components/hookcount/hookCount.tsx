"use client"
import React, { ReactNode, useState } from "react"
import "./hookCount.css"

export default function HookCount() :ReactNode {
  const [count, setCount] = useState(0)

  return (
    <div className="hook-counter">
      <h1>{count}</h1>
      <button className="hook-counter-button" onClick={() => setCount(count + 1)}>
        One up!
      </button>
    </div>
  )
}