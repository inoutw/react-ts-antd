import React from 'react'

interface LayoutContext {
  collapsed: boolean
  setCollapsed(): void
}

const LayoutContext = React.createContext({} as LayoutContext)
export default LayoutContext
