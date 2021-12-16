import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Helpers
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import styled from 'styled-components'

const BlogImageWrapper = styled.div`
  max-width: ${({ theme }) => theme.screens.md};
  display: flex;
  margin: ${({ theme }) => theme.margin['1/2']} -${({ theme }) => theme.margin['2xl']};
  border: 1px solid ${({ theme }) => theme.colors.card[400]};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media (max-width: ${({ theme }) => theme.screens.md}) {
      margin: 0 -${({ theme }) => theme.margin['1/2']};
    }

}
`

const BlogImage = ({ slice }) => {
  const mediaObj = slice.primary.image
  return (
    <BlogImageWrapper>
      {slice.slice_type === 'image_blog' && (
        <Zoom zoomMargin={32}>
          <GatsbyImage
            image={mediaObj.gatsbyImageData}
            alt={mediaObj.alt ? mediaObj.alt : 'Placeholder image'}
          />
        </Zoom>
      )}
    </BlogImageWrapper>
  )
}

export default BlogImage
