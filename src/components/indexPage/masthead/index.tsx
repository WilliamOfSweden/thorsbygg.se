import React, { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Masthead: FC = () => {
  return (
    <section>
      <StaticImage
        src='../../../images/hero-img-landscape.jpeg'
        alt='Light bulb standing on the floor, turned on and connected to a wall socket.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='blurred'
        layout='fullWidth'
      />
      <StaticImage
        src='../../../images/hero-img-portrait.jpeg'
        alt='Light bulb standing on the floor, turned on and connected to a wall socket.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='blurred'
        layout='fullWidth'
      />
    </section>
  )
}

export default Masthead
