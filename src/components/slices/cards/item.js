import React from 'react'

// Helpers
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../utils/linkResolver'
import { getImgFormat } from '/src/utils/helpers'
import { validateString } from '/src/utils/helpers'

// Layout
import ItemContent from '/src/components/common/layout/listResults/itemContent'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'
const CardsWrapper = styled.div`
  a,
  a:link,
  a:hover,
  a:visited {
    display: inline-flex;
    text-decoration: none !important;
  }

  a {
    .carousel {
      .imageWrapper {
        border-radius: ${({ theme }) => theme.borderRadius.default};
      }
      .content {
        background-color: transparent;
        .link {
          color: inherit;
          text-transform: none;
        }
      }

      &:hover {
        box-shadow: none;
        .imageWrapper,
        .link {
          box-shadow: ${({ theme }) => theme.boxShadow.lg};
        }
      }
    }
  }
`

const Card = ({ cardItem, presentationType, item, carouselLength }) => {
  // Validate image format
  var imgFormat = getImgFormat(cardItem.format)
  // Validate content
  const link = cardItem.link
  // console.log(link)
  const image = cardItem.image
  const title = validateString(cardItem.title)
  const content = cardItem.description
  const linkLabel = validateString(cardItem.link_label.text)

  // console.log('link.uid =')
  return (
    <CardsWrapper
      className={`cardItem ${presentationType} ${
        presentationType === `carousel` ? `keen-slider__slide` : ''
      }`}
      // aria-roledescription={`Card ${item + 1} of ${carouselLength}`}
      // role={`Item ${item + 1} of ${carouselLength}`}
    >
      {link.uid && (
        <Link to={linkResolver(link)}>
          <ItemContent className={presentationType}>
            {image && (
              <GatsbyImage
                className={'imageWrapper landscape ' + imgFormat}
                image={image.gatsbyImageData}
                alt={
                  image.alt ? image.alt : 'Sorry, no image description is available at this time'
                }
              />
            )}
            <div className="content">
              {title && (
                <p className="title">
                  {title}
                  {presentationType === 'gallery' && <IconMaterial icon={'arrow_forward'} />}
                </p>
              )}
              {content.text && <RichText render={content.richText} />}
              {linkLabel && presentationType === 'carousel' && (
                <span className="link">
                  {linkLabel}
                  <IconMaterial icon={'arrow_forward'} />
                </span>
              )}
            </div>
          </ItemContent>
        </Link>
      )}

      {!link.uid && (
        <ItemContent className={presentationType}>
          {image && (
            <GatsbyImage
              className={'imageWrapper landscape ' + imgFormat}
              image={image.gatsbyImageData}
              alt={image.alt ? image.alt : 'Sorry, no image description is available at this time'}
            />
          )}
          <div className="content">
            {title && (
              <p className="title">
                {title}
                {presentationType === 'gallery' && <IconMaterial icon={'arrow_forward'} />}
              </p>
            )}
            {content.text && <RichText render={content.richText} linkResolver={linkResolver} />}
            {linkLabel && presentationType === 'carousel' && (
              <span className="link">
                {linkLabel}
                <IconMaterial icon={'arrow_forward'} />
              </span>
            )}
          </div>
        </ItemContent>
      )}
    </CardsWrapper>
  )
}

export default Card
