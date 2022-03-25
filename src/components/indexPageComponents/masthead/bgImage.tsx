import React, { useLayoutEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const BgImage = () => {
  const [size, setSize] = useState(0)

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth)
    }

    window.addEventListener('resize', updateSize)

    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  if (size > 600) {
    return (
      <StaticImage
        alt='Miniature house standing on top of blueprints with bricks in front of it.'
        formats={['auto', 'webp', 'avif']}
        layout='fullWidth'
        loading='eager'
        placeholder='none'
        src='../../../images/hero-img-landscape.jpeg'
      />
    )
  }

  return (
    <StaticImage
      alt='Miniature house standing on top of blueprints with bricks in front of it.'
      formats={['auto', 'webp', 'avif']}
      layout='fullWidth'
      loading='eager'
      placeholder='none'
      src='../../../images/hero-img-portrait.jpeg'
    />
  )
}
