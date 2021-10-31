import React, { useEffect, useState } from 'react'

//Helpers
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../utils/linkResolver'
import CardItem from './item.js'
import Masonry from 'react-masonry-css'
import { useKeenSlider } from 'keen-slider/react'

// Buttons
import NavArrow from './navArrow'

import 'keen-slider/keen-slider.min.css'

import {
  getPresentationType,
  getPostionAlign,
  getContentWidth,
  // getDefaultMargin,
  getAutoSpacing,
  getManualSpacing,
  getBgColor,
  getColorTint,
  rgb2hex,
  getContrast,
} from '/src/utils/helpers'

import { screenSize } from '/src/themes/globalStyles'

import styled from 'styled-components'

const CardsWrapper = styled.section`
  padding: 0 ${({ theme }) => theme.padding['1/2']};

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding-top:  0 !important;
    padding-bottom: ${({ theme }) => theme.padding.default} !important;
  }

  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.padding.default};
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      margin: ${({ theme }) => theme.padding.default} 0;
    }
  }
  .title.left {
    text-align: left;
  }
  .title.center {
    text-align: center;
  }
  .title.right {
    text-align: right;
  }

  .masonry-grid {
    /* padding: 0 ${({ theme }) => theme.padding['1/2']}; */
    display: flex;
    grid-gap: ${({ theme }) => theme.padding.default};
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      grid-gap: ${({ theme }) => theme.padding['1/2']};
    }
    @media (max-width: ${({ theme }) => theme.screens.xs}) {
      grid-gap: ${({ theme }) => theme.padding.default};
    }
    width: auto;
    position: relative;
  }

  .masonry-grid_column {
    height: min-content;
    background-clip: padding-box;
  }

  /* Style your items */
  .masonry-grid_column {
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding.default};
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      grid-gap: ${({ theme }) => theme.padding['1/2']};
    }
    @media (max-width: ${({ theme }) => theme.screens.xs}) {
      grid-gap: ${({ theme }) => theme.padding.default};
    }
    .cardItem {
      flex: 0 1 48%;
      width: 100%;
    }
  }

  // Gallery layout
  .cardItem.gallery {
    overflow: visible;
    display: flex;
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      padding-top:  ${({ theme }) => theme.padding['1/2']} !important;
    }

    a {
      width: 100%;
      text-decoration: none;
      > div {
        background-color: #fff;

        div.portrait {
          img {
             aspect-ratio: 3/4;
             object-fit: fill;
             object-position: center bottom;
          }
        }
      }
    }

    p {
      display: flex;
      a {
        display: contents;
      }
    }

  }
  

  // Profile layout
  .cardItem.profile {
    overflow: visible;
    display: flex;
   
    div {
      width: 100%;
      text-decoration: none;
      
      
      article {
          overflow: visible;
          grid-gap: ${({ theme }) => theme.padding['1/2']};
          padding-top: ${({ theme }) => theme.padding.default};
        }
        .imageWrapper {
          aspect-ratio: 1;
          width: 128px;
          border-radius: 999rem;
          /* border: 1px solid ${({ theme }) => theme.colors.secondary.default}; */
          border: 1px solid ${({ theme }) => theme.colors.secondary[400]};
          margin: 0 auto;
          box-shadow: ${({ theme }) => theme.boxShadow.lg};
        }
        .content {
           width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          grid-gap: ${({ theme }) => theme.padding['1/4']};
          .title,
          p {
            justify-content: inherit;
          }
        }
      }
    }
  }

  // Carousel layout keen_slider {
  .keen-slider{
    margin: 0 -16px;
  }

  .carousel {
    position: relative;
     .cardItem {
      overflow: visible !important; 
    }

    .nav {
      display: flex;
      margin: ${({ theme }) => theme.margin['1/2']} auto 0;
      width: fit-content;
      grid-gap: ${({ theme }) => theme.padding['1/2']};

      .item {
        width: ${({ theme }) => theme.padding['1/2']};
        height: ${({ theme }) => theme.padding['1/2']};
        background-color: ${({ theme }) => theme.colors.page.default};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
      }

      .item:hover,
      .item.active {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primary.default};
      }
    }

    .cardItem {
      cursor: col-resize;

      a {
        width: 100%;
        text-decoration: none;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        grid-gap: ${({ theme }) => theme.padding['1/2']};
        > div {
          background-color: transparent;
          border: none;
          box-shadow: none;
          overflow: visible;
        }
        .imageWrapper {
          border-radius: ${({ theme }) => theme.borderRadius.default};
          border: none;
          @media (max-width: ${({ theme }) => theme.screens.sm}) {
            border-radius: 0px;
          }
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          grid-gap: ${({ theme }) => theme.padding['1/4']};
          .title,
          p {
            justify-content: inherit;
          }

          p{
            display: flex;
            a{
             display: contents;
            }
          }
          .link {
            text-transform: uppercase;
            position: relative;
            display: flex;
            grid-gap: ${({ theme }) => theme.padding['1/4']};
            margin: 0 auto;
            align-items: center;
            white-space: nowrap;
            width: fit-content;
            padding: 8px 18px;
            color: ${({ theme }) => theme.colors.page.default};
            background-color: #ffffffa8;
            border-radius: ${({ theme }) => theme.borderRadius.default};
            box-shadow: ${({ theme }) => theme.boxShadow.default};
            i {
              position: inherit;
              transition: ${({ theme }) => theme.transition.easeIn.default};
              right: 0px;
            }
          }
        }
      }
      a:hover {
        /* overflow: visible; */
        > div {
          /* box-shadow: none; */
        }
        .imageWrapper {
          box-shadow: ${({ theme }) => theme.boxShadow.lg};
        }
        .content {
          .link {
            box-shadow: ${({ theme }) => theme.boxShadow.lg};
            i {
              color: inherit;
              transition: ${({ theme }) => theme.transition.easeOut.default};
              right: -${({ theme }) => theme.padding['1/8']};
            }
          }
        }
      }
    }
  }

  &.light {
    .carousel {
      .nav {
        .item {
          background-color:${({ theme }) => theme.colors.page[100]};
        }

        .item:hover,
        .item.active {
          background-color: ${({ theme }) => theme.colors.page.default};
        }
      }
    }
  }

  &.dark {
    .carousel {
      .prev,
      .next {
        i {
          color: ${({ theme }) => theme.colors.page.default};
        }
      }

      .nav {
        .item {
          background-color: ${({ theme }) => theme.colors.page.default};
        }

        .item:hover,
        .item.active {
          background-color: #fff;
        }
      }

      .content {
        color: ${({ theme }) => theme.colors.page[100]};
      }
    }
  }
`

const Cards = ({ slice }) => {
  // Set up the section with an id and some classes and styles
  // Add a page ID to reference
  const sectionID = slice.id
  // Set the content width class
  const sectionWidth = getContentWidth(slice.primary.width)
  // Set default contrast color class
  const setContrast = 'light'
  // Set the bgColor class
  var bgColor = getBgColor(slice.primary.background_color)
  const bGroundTint = getColorTint(slice.primary.background_tint)
  bgColor = 'background-' + bgColor + '-' + bGroundTint
  // Set the vertical padding - inline style
  const defaultPadding = getAutoSpacing(slice.primary.default_padding)
  var vPaddingTop = getManualSpacing(slice.primary.v_padding_top)
  var vPaddingBottom = getManualSpacing(slice.primary.v_padding_bottom)
  if (vPaddingTop === null) {
    vPaddingTop = defaultPadding + 'px'
  }
  if (vPaddingBottom === null) {
    vPaddingBottom = defaultPadding + 'px'
  }

  // Set the state of the forGroundColor
  const [forGroundColor, setForgroundColor] = useState(setContrast)
  // Find the current bground color of the section and update the forground color class
  useEffect(() => {
    var objBground = document.getElementById(`${sectionID}`)
    let bgColor = window.getComputedStyle(objBground).backgroundColor
    // Convert it a hex value
    bgColor = rgb2hex(bgColor)
    // Return the contrast mode  - 'dark' or 'light'
    var updateContrast = getContrast(bgColor)
    // Update contrast color and set it as a class in the section
    setForgroundColor(updateContrast)
    // Disable warinings of missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Validate title text
  const title = slice.primary.card_title
  const ariaLabel = slice.primary.aria_label
  const align = getPostionAlign(slice.primary.align)

  // How do we present this? Carousel or Gallery
  const columnCount = 3
  const presentationType = getPresentationType(slice.primary.presentation_type)

  // Carousel
  // const carouselMargin = getDefaultMargin()
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    slidesPerView: 1,
    mode: 'snap',
    spacing: 32,
    centered: true,
    loop: true,
    breakpoints: {
      // [screenSize.xs]: {
      '(min-width: 576px)': {
        slidesPerView: 2,
        centered: true,
        mode: 'free-snap',
      },
      '(min-width: 1200px)': {
        slidesPerView: columnCount,
        centered: true,
        mode: 'free-snap',
      },
    },
  })

  const breakpointColumnsObj = {
    // default: 2,
    //default: columnCount,
    [screenSize.xs]: 1,
    [screenSize.sm]: 2,
    [screenSize.md]: 2,
    // [screenSize.lg]: columnCount,
    // [screenSize.xl]: columnCount,
    // [screenSize.xxl]: 3,
    10000: columnCount,
  }

  return (
    <CardsWrapper
      id={sectionID}
      className={'section-layout ' + sectionWidth + ' ' + forGroundColor + ' ' + bgColor}
      style={{
        paddingTop: vPaddingTop,
        paddingBottom: vPaddingBottom,
      }}
    >
      <div>
        {title.text && (
          <span className={'title ' + align}>
            <RichText render={title.raw} linkResolver={linkResolver} />
          </span>
        )}

        {/* Masonary Cards - Gallery */}
        {presentationType === 'gallery' && (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
            aria-label={ariaLabel}
          >
            {slice.items.map((cardItem, index) => {
              return (
                <CardItem
                  cardItem={cardItem}
                  key={slice.id + index}
                  presentationType={presentationType}
                  item={index}
                  carouselLength={slice.items.length}
                />
              )
            })}
          </Masonry>
        )}

        {/* Masonary Cards - Profile */}
        {presentationType === 'profile' && (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
            aria-label={ariaLabel}
          >
            {slice.items.map((cardItem, index) => {
              return (
                <CardItem
                  cardItem={cardItem}
                  key={slice.id + index}
                  presentationType={presentationType}
                  item={index}
                  carouselLength={slice.items.length}
                />
              )
            })}
          </Masonry>
        )}

        {/* Carousel */}
        {presentationType === 'carousel' && (
          <div
            className="carousel"
            aria-roledescription="carousel"
            aria-label={ariaLabel}
            aria-live="polite"
          >
            <div ref={sliderRef} id="carousel-items" className="keen-slider">
              {slider && (
                <>
                  <NavArrow
                    onClick={(e) => e.stopPropagation() || slider.prev()}
                    disabled={currentSlide === 0}
                    direction={'prev'}
                    aria-controls="carousel-items"
                  />
                  <NavArrow
                    onClick={(e) => e.stopPropagation() || slider.next()}
                    disabled={currentSlide === slider.details().size - 1}
                    direction={'next'}
                    aria-controls="carousel-items"
                  />
                </>
              )}

              {slice.items.map((cardItem, index) => {
                return (
                  <CardItem
                    cardItem={cardItem}
                    key={slice.id + index}
                    presentationType={presentationType}
                    item={index}
                    carouselLength={slice.items.length}
                  />
                )
              })}
            </div>
            {slider && (
              <div className="nav">
                {[...Array(slider.details().size).keys()].map((idx) => {
                  return (
                    <button
                      key={`carousel-nav-${idx}`}
                      onClick={() => {
                        slider.moveToSlideRelative(idx)
                      }}
                      aria-label={'Move this slide to central view'}
                      className={'item' + (currentSlide === idx ? ' active' : '')}
                    />
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </CardsWrapper>
  )
}

export default Cards
