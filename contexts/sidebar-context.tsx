"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface SidebarContextType {
  isOpen: boolean
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Load sidebar state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebar-open")
    if (savedState !== null) {
      setIsOpen(savedState === "true")
    }
    setMounted(true)
  }, [])

  // Save sidebar state to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("sidebar-open", String(isOpen))
    }
  }, [isOpen, mounted])

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
  }

  const setSidebarOpen = (open: boolean) => {
    setIsOpen(open)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
