import type React from "react"
export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export interface Step {
  icon: React.ReactNode
  title: string
  description: string
}

export interface NavItem {
  href: string
  label: string
}
