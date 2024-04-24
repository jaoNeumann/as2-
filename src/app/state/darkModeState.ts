import { create } from 'zustand'

interface DarkModeState {
  dark: boolean
  change: () => void
}

export const useDarkMode = create<DarkModeState>()(
  (set) => ({
    dark: true,
    change: () => set((state) => ({ dark: !state.dark })),
  })
)