import React, { useRef, useEffect } from 'react'

// Helpers
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Tags from '../../common/filter/tags'
import linkResolver from '../../../utils/linkResolver'
import { resizeAllGridItems } from '/src/utils/helpers'
// Third party helpers
// import { gsap, Power3 } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Layout
import ItemWrapper from '/src/components/common/layout/listResults/itemWrapper'
import ItemContent from '/src/components/common/layout/listResults/itemContent'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const GalleryItem = ({ listStyle, thisItem, index, listLength, animateScroll }) => {
  // Reference grid items
  const gridItems = useRef([])
  gridItems.current = []

  const gridItem = (item) => {
    if (item && !gridItems.current.includes(item)) {
      gridItems.current.push(item)
    }
  }

  // Use 'Resize all grid items' for grid filtering
  useEffect(() => {
    resizeAllGridItems(gridItems)
    'onclick, pointerover, resize, keydown, orientationchange'.split(', ').forEach(function (e) {
      window.addEventListener(e, () => {
        // Helpers - resizeAllGridItems
        resizeAllGridItems(gridItems)
      })
    })
  }, [])

  const item = thisItem.item.document
  const content = thisItem.item.document.data
  const title = content.title.text
  const intro = content.intro
  var tagData = thisItem.item.document.tags

  //Filter duplicates if any
  tagData = uniq(tagData)
  function uniq(a) {
    var seen = {}
    return a.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true)
    })
  }

  //Sort
  tagData.sort()

  return (
    <>
      {item.uid && (
        <ItemWrapper className={'item show'} ref={gridItem}>
          <Link to={linkResolver(item)} className="card">
            <ItemContent className={`portfolio-${listStyle}`}>
              {content.main_image && (
                <div className="imageWrapper">
                  <GatsbyImage
                    aria-label="Zoom image and open slide show"
                    // tabIndex="0"
                    image={content.main_image.gatsbyImageData}
                    alt={content.main_image.alt ? content.main_image.alt : content.title.text}
                  />
                  <span className="openLightBox">
                    <IconMaterial icon={'open_in_full'} />
                  </span>
                </div>
              )}

              <div className="content">
                {title && (
                  <h2 className="title">
                    {title}
                    <IconMaterial icon={'arrow_forward'} />
                  </h2>
                )}
                {intro && <p>{intro}</p>}
                {tagData && <Tags tagData={tagData} />}
              </div>
            </ItemContent>
          </Link>
        </ItemWrapper>
      )}
    </>
  )
}

export default GalleryItem
