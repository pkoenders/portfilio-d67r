import React, { useRef, useEffect } from 'react'

// Helpers
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Tags from '../../common/filter/tags'
import linkResolver from '../../../utils/linkResolver'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { resizeAllGridItems } from '/src/utils/helpers'

// Layout
import CardContent from '/src/components/common/layout/listResults/cardContent'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const CardItem = styled.li`
  display: none;
  a {
    text-decoration: none;

    .imageWrapper {
      cursor: zoom-in;
      img {
        transform: scale(1);
      }
    }
  }

  &:hover {
    .imageWrapper {
      img {
        transform: scale(1.033);
      }
    }
    .content {
      /* background-color: ${({ theme }) => theme.colors.card[100]}; */
    }
  }

  &.show,
  &.isActive {
    display: flex;
    height: fit-content;
  }
`
const GalleryItem = ({ thisItem, animateScroll }) => {
  // const _ = require('lodash')

  // Reference grid items
  const gridItems = useRef([])
  gridItems.current = []

  const revealTxt = useRef([])
  revealTxt.current = []

  const gridItem = (item) => {
    if (item && !gridItems.current.includes(item)) {
      gridItems.current.push(item)
    }
  }

  const innerTxt = (item) => {
    if (item && !revealTxt.current.includes(item)) {
      revealTxt.current.push(item)
    }
  }

  gsap.registerPlugin(ScrollTrigger)

  // Use 'Resize all grid items' for grid filtering
  useEffect(() => {
    resizeAllGridItems(gridItems)
    'mouseup, pointerover, resize, keydown, orientationchange'.split(', ').forEach(function (e) {
      window.addEventListener(e, () => {
        // Helpers - resizeAllGridItems
        resizeAllGridItems(gridItems)
      })
    })
  }, [])

  useEffect((animateScroll) => {
    if (animateScroll === true) {
      gridItems.current.forEach((item, index) => {
        if (item == null) return
        // var tl = gsap.timeline({
        gsap.fromTo(
          item,
          {
            y: 96,
          },
          {
            y: 0,
            ease: Power3.easeOut,

            scrollTrigger: {
              trigger: item,
              start: 'top bottom-=0px',
              end: 'bottom bottom+=0px',
              //scrub: 0,
              toggleActions: 'play none none reverse',
              //markers: true
            },
          }
        )
        return () => {
          gridItems.current.kill()
        }
      })

      revealTxt.current.forEach((item, index) => {
        if (item == null) return
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 8,
          },
          {
            opacity: 1,
            y: 0,
            ease: Power3.easeOut,
            duration: 2,
            scrollTrigger: {
              trigger: item,
              start: 'top bottom-=32px',
              end: 'bottom bottom+=32px',
              //scrub: 0,
              toggleActions: 'play none none reverse',
              //markers: true
            },
          }
        )
        return () => {
          revealTxt.current.kill()
        }
      })
    }
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
        <CardItem className={'item show'} ref={gridItem}>
          <Link to={linkResolver(item)} className="card">
            <CardContent>
              {content.main_image && (
                <div className="imageWrapper">
                  <GatsbyImage
                    image={content.main_image.localFile.childImageSharp.gatsbyImageData}
                    alt={content.main_image.alt ? content.main_image.alt : content.title.text}
                  />
                  <span className="openLightBox">
                    <IconMaterial icon={'zoom_out_map'} />
                  </span>
                </div>
              )}

              <div className="content" ref={innerTxt}>
                {title && (
                  <h2 className="title">
                    {title}
                    <IconMaterial icon={'arrow_forward'} />
                  </h2>
                )}
                {intro && <p>{intro}</p>}
                {tagData && <Tags tagData={tagData} />}
              </div>
            </CardContent>
          </Link>
        </CardItem>
      )}
    </>
  )
}

export default GalleryItem
