import React, { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Masthead: FC = () => {
  return (
    <section>
      <StaticImage
        src='../../../images/hero-img-landscape.jpeg'
        alt='Miniature house standing in blueprints with bricks in front of it.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='blurred'
        layout='fullWidth'
      />
      <StaticImage
        src='../../../images/hero-img-portrait.jpeg'
        alt='Miniature house standing in blueprints with bricks in front of it.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='blurred'
        layout='fullWidth'
      />
    </section>
  )
}

export default Masthead
