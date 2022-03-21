import React, { Fragment, useLayoutEffect, useState } from 'react'
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

  return (
    <Fragment>
      {size > 600 ? (
        <StaticImage
          alt='Miniature house standing on top of blueprints with bricks in front of it.'
          formats={['auto', 'webp', 'avif']}
          layout='fullWidth'
          loading='eager'
          placeholder='none'
          src='../../../images/hero-img-landscape.jpeg'
        />
      ) : (
        <StaticImage
          src='../../../images/hero-img-portrait.jpeg'
          alt='Miniature house standing on top of blueprints with bricks in front of it.'
          loading='eager'
          formats={['auto', 'webp', 'avif']}
          placeholder='none'
          layout='fullWidth'
        />
      )}
    </Fragment>
  )
}
