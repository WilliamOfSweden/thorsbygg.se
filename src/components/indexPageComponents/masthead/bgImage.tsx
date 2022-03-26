import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { useIsMobile } from '../../../hooks/useIsMobile'

export const BgImage = () => {
  const isMobile = useIsMobile(600)

  if (isMobile) {
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
