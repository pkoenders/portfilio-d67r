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
import Section from '/src/components/common/layout/pageLayout/'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const GalleryHeader = styled.header`
  display: flex;
  position: relative;

  grid-gap: ${({ theme }) => theme.padding.default};
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
  }
  margin: ${({ theme }) => theme.padding['4xl']} auto ${({ theme }) => theme.padding.default} auto;
  /* border-bottom: 4px solid ${({ theme }) => theme.colors.secondary[300]}; */

  color: ${({ theme }) => theme.colors.accent.default};

  &::after {
    position: absolute;
    content: '';
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0px;
    background: ${({ theme }) => theme.colors.primary[400]};
    /* background: rgb(255, 255, 255);
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(81, 191, 235, 1) 100%); */
  }

  & .intro {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    margin-bottom: ${({ theme }) => theme.margin['1/4']};
  }
`

const GalleryBody = styled.article`
  display: flex;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
  }
  grid-gap: ${({ theme }) => theme.padding.default};
  & .content {
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    width: 30%;
    @media (max-width: ${({ theme }) => theme.screens.md}) {
      padding-right: 0;
      width: 100%;
    }

    span,
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: ${({ theme }) => theme.padding['1/4']};
      text-decoration: none;
      width: fit-content;
      border-bottom: 1px solid transparent;
    }

    a:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.promarydefault};
    }

    .date {
      color: ${({ theme }) => theme.colors.page[700]};
    }
  }
  & .gallery {
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['4xl']};
    width: 70%;
    @media (max-width: ${({ theme }) => theme.screens.md}) {
      width: 100%;
    }
    div {
      display: flex;
      overflow: hidden;
      border: 1px solid ${({ theme }) => theme.colors.card[400]};
      box-shadow: ${({ theme }) => theme.boxShadow.lg};
      border-radius: ${({ theme }) => theme.borderRadius.default};
    }
  }
`

const GalleryItem = ({ currentLang, itemData }) => {
  const galleryItem = itemData.data
  const title = validateString(galleryItem.title.text)
  const date = galleryItem.creation_date
  const link = galleryItem.link.url
  const content = validateString(galleryItem.description.raw)
  const mainImage = galleryItem.main_image.localFile.childImageSharp.gatsbyImageData
  const galleryImageRoll = galleryItem.body1[0]

  // mediumZoom('[data-zoomable]')
  // mediumZoom(document.querySelector('.zoom'))

  // const zoomImages = [...document.querySelectorAll('[data-zoomable]')]

  // mediumZoom(zoomImages)

  // mediumZoom('.zoom')

  // const zoom = React(mediumZoom())

  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <Section classOverides={'lg hasSecondaryNav'}>
      <div>
        <GalleryHeader>
          <div className="intro">{title && <h1>{title}</h1>}</div>
        </GalleryHeader>

        <GalleryBody>
          <div className="content">
            {date && <span className="date">{date}</span>}
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
          <aside className="gallery">
            {mainImage && (
              <Zoom zoomMargin={32}>
                <GatsbyImage
                  image={mainImage}
                  alt={
                    galleryItem.main_image.localFile.alt
                      ? galleryItem.main_image.localFile.alt
                      : 'This image currently has no description'
                  }
                />
              </Zoom>
            )}

            {galleryImageRoll !== undefined &&
              galleryImageRoll.items.map((item, index) => (
                <Zoom zoomMargin={32}>
                  <GatsbyImage
                    image={item.image.localFile.childImageSharp.gatsbyImageData}
                    alt={
                      item.image.localFile.alt
                        ? item.image.localFile.alt
                        : 'This image currently has no description'
                    }
                    key={index}
                  />
                </Zoom>
              ))}
          </aside>
        </GalleryBody>
      </div>
    </Section>
  )
}

export default GalleryItem
