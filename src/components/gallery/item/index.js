import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Helpers
// import i18n from '/config/i18n'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { RichText } from 'prismic-reactjs'
import linkResolver from '/src/utils/linkResolver'
import { validateString } from '/src/utils/helpers'

// Layout
import PageLayout from '/src/components/common/layout/pageLayout/'
import PageHeader from '/src/components/common/layout/pageLayout/header'
import PageBody from '/src/components/common/layout/pageLayout/body'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const GalleryItem = ({ currentLang, itemData }) => {
  const galleryItem = itemData.data
  const title = validateString(galleryItem.title.text)
  const date = galleryItem.creation_date
  const link = galleryItem.link.url
  const content = validateString(galleryItem.description.richText)
  const mainImage = galleryItem.main_image.gatsbyImageData
  const galleryImageRoll = galleryItem.body1[0]

  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <PageLayout classOverides="lg withSecondaryNav">
      <PageHeader>
        <div className="intro">{title && <h1>{title}</h1>}</div>
      </PageHeader>

      <PageBody className="content galleryContent">
        <div>
          {date && <time>{date}</time>}
          {link && (
            <a
              href={link}
              target="_blank"
              aria-describedby="Open link in a new window"
              rel="noreferrer"
              className="visit"
            >
              <IconMaterial icon={'open_in_new'} />
              {link}
            </a>
          )}
          {content && (
            <div>
              <RichText render={content} linkResolver={linkResolver} />
            </div>
          )}
        </div>
        <aside className="galleryImgs">
          {mainImage && (
            <Zoom zoomMargin={32}>
              <GatsbyImage
                image={mainImage}
                alt={
                  galleryItem.main_image.alt
                    ? galleryItem.main_image.alt
                    : 'This image currently has no description'
                }
              />
            </Zoom>
          )}

          {galleryImageRoll !== undefined &&
            galleryImageRoll.items.map((item, index) => (
              <Zoom zoomMargin={32}>
                <GatsbyImage
                  image={item.image.gatsbyImageData}
                  alt={item.image.alt ? item.image.alt : 'This image currently has no description'}
                  key={index}
                />
              </Zoom>
            ))}
        </aside>
      </PageBody>
    </PageLayout>
  )
}

export default GalleryItem
