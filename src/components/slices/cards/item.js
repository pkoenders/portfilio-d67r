import React from 'react'

// Helpers
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../utils/linkResolver'
import { getImgFormat } from '/src/utils/helpers'
import { validateString } from '/src/utils/helpers'

// Layout
import CardContent from '/src/components/common/layout/listResults/cardContent'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const Card = ({ cardItem, presentationType }) => {
  // Validate image format
  var imgFormat = getImgFormat(cardItem.format)
  // Validate content
  const link = cardItem.link
  // console.log(link)
  const image = cardItem.image
  const title = validateString(cardItem.title)
  const content = cardItem.description
  const linkLabel = validateString(cardItem.link_label.text)

  return (
    <div
      className={`cardItem ${presentationType} ${
        presentationType === `carousel` ? `keen-slider__slide` : ''
      }`}
    >
      <Link to={link.uid !== null ? linkResolver(link) : `./#null`} className="link">
        <CardContent>
          {image && (
            <GatsbyImage
              className={'imageWrapper landscape ' + imgFormat}
              image={image.localFile.childImageSharp.gatsbyImageData}
              alt={image.alt ? image.alt : 'Sorry, no image description is available at this time'}
            />
          )}
          <div className="content">
            {title && (
              <div className="title">
                {title}
                {presentationType === 'gallery' && <IconMaterial icon={'arrow_forward'} />}
              </div>
            )}
            {content.text && <RichText render={content.raw} />}
            {linkLabel && presentationType === 'carousel' && (
              <span className="link">
                {linkLabel}
                <IconMaterial icon={'arrow_forward'} />
              </span>
            )}
          </div>
        </CardContent>
      </Link>
    </div>
  )
}

export default Card
