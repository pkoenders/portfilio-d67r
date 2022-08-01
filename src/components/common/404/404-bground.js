import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImageWrapper from 'gatsby-background-image'

import styled from 'styled-components'

const BackgroundImage = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-size: cover;
  background-position: center center;
  top: 0;
  z-index: -1;
`

const BackgroundSection = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "images/zoe2.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50
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
    <BackgroundImageWrapper
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
      }}
    >
      <BackgroundImage>
        <GatsbyImage image={image} />
      </BackgroundImage>
    </BackgroundImageWrapper>
  )
}

export default BackgroundSection
