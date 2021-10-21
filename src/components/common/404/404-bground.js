import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "images/zoe2.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              layout: FULL_WIDTH
              transformOptions: {
                fit: COVER
                cropFocus: ATTENTION
                #grayscale: true
                duotone: { highlight: "#ebd956", shadow: "#031223", opacity: 33 }
              }
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      style={{
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: '#000',
        // opacity: '.3',

        // zIndex: '-1',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexGrow: '1',
          // height: '100vh',
          width: '100%',
          // zIndex: '-1',
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          top: 0,
        }}
      >
        <GatsbyImage image={image} />
      </div>
    </BackgroundImage>
  )
}

export default BackgroundSection
