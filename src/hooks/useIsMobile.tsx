import { useState, useLayoutEffect } from 'react'

export const useIsMobile = (mobileBreakpoint: number) => {
  const [size, setSize] = useState(0)

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth)
    }

    window.addEventListener('resize', updateSize)

    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size < mobileBreakpoint
}
