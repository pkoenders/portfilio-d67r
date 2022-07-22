// General helpers

// Validate text string
// Resize grid items

// Return (Card) presentation mode - Gallery or Carousel
// Return column count
// Return content width
// Return hero image height
// Return font size
// Return Line height
// Return position and align
// Return auto spacing
// Return manual spacing
// Return percentage
// Return color
// Return background color
// Return tint
// Return contrast
// Return style
// Return list style
// Return opacity value
// Return rgb2hex
// Return rgbOnly2Hex
// Return contrast
// Return overlay (gradient) direction
// Return bGround postion direction
// Return Image format (Landscape / Portrait)
// Return zoom level (Google maps)

import hexRgb from 'hex-rgb'

// Validate text string
export function validateString(string) {
  if (string === null) {
    string = 0
  }

  if (string === undefined) {
    string = 0
  }

  var stringLenth
  stringLenth = string.length
  switch (stringLenth) {
    case '':
    case undefined:
    case null:
    case 0:
      return null

    default:
      return string
  }
}

// Resize grid items
export function resizeAllGridItems(gridItems) {
  gridItems.current.forEach((item, index) => {
    if (item.parentNode === null) return
    // Resize grid
    const grid = item.parentNode
    //grid.style.height = 100 + '%'
    // grid.style.height = 'fit-content'
    // grid.style.minHeight = 100 + '%'

    const rowHeight = 0
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
    const rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))
    item.style.gridRowEnd = `span ${rowSpan}`
  })
}

// Return card presentation
export function getPresentationType(presentAs) {
  switch (presentAs) {
    case 'Gallery grid':
    case null:
      return 'gallery'

    case 'Gallery list':
      return 'galleryList'

    case 'Profile grid':
      return 'profile'

    case 'Profile list':
      return 'profileList'

    case 'Carousel':
      return 'carousel'

    default:
      return 'gallery'
  }
}

// Return column count
export function getColumnCount(columns) {
  switch (columns) {
    case '1 Column':
    case null:
      return 'col1'

    case '2 Columns':
      return 'col2'

    case '3 Columns':
      return 'col3'

    case '4 Columns':
      return 'col4'

    default:
      return 'col1'
  }
}

// Return content overide style
export function getContentOverrideStyle(contentStyle) {
  switch (contentStyle) {
    case null:
      return null

    case 'Style like H1':
      return 'styledh1'

    case 'Style like H2':
      return 'styledh2'

    case 'Style like H3':
      return 'styledh3'

    case 'Style like H4':
      return 'styledh4'

    case 'Style like H5':
      return 'styledh5'

    case 'Style like H6':
      return 'styledh6'

    default:
      return null
  }
}

// Return content width
export function getContentWidth(width) {
  switch (width) {
    // "Default (992px)",
    // "Skinny (576px)",
    // "Slim (768px)",
    // "Large (1200px)",
    // "Wide (1366px)",
    // "Extra wide (1680px)",
    // "Full width (100%)"

    case 'Default (992px)':
    case null:
      return 'default'

    case 'Skinny (576px)':
      return 'skinny'

    case 'Slim (768px)':
      return 'slim'

    case 'Large (1200px)':
      return 'large'

    case 'Wide (1366px)':
      return 'wide'

    case 'Extra wide (1680px)':
      return 'extraWide'

    case 'Full width (100%)':
      return 'full'

    default:
      return 'default'
  }
}

// Return hero image height
export function getHeroImgHeight(height, vheight) {
  if (vheight === true) {
    height = parseFloat(100 - (60 / 100) * 10)
    return height + 'vh'
  }

  if (typeof height == 'number') {
    return height + 'px'
  } else {
    switch (height) {
      case null:
        return '450px'

      default:
        return '450px'
    }
  }
}

// Return font size
export function getFontSize(size) {
  switch (size) {
    case 'Default':
    case '100%':
    case null:
      return '100%'

    case '110%':
      return '110%'

    case '120%':
      return '120%'

    case '130%':
      return '130%'

    case '140%':
      return '140%'

    case '150%':
      return '150%'

    default:
      return '100%'
  }
}

// Return line height
export function getLineHeight(size) {
  switch (size) {
    case 'Default':
    case '100%':
    case null:
      return '' // 1.5

    case '110%':
      return 1.7

    case '120%':
      return 1.7

    case '130%':
      return 1.8

    case '140%':
      return 1.9

    case '150%':
      return 2

    default:
      return ''
  }
}

// Return position and align
export function getPostionAlign(align) {
  switch (align) {
    case 'Left':
    case null:
      return 'left'

    case 'Centre':
      return 'center'

    case 'Right':
      return 'right'

    case 'Top':
      return 'top'

    case 'Bottom':
      return 'bottom'

    default:
      return 'left'
  }
}

// Return auto spacing
export function getAutoSpacing(spacing) {
  switch (spacing) {
    case null:
    case undefined:
    case 'Default - 32px':
      return '32'
    case '1/2 - 16px':
      return '16'
    case '1/4 - 8px':
      return '8'
    case '1/8 - 4px':
      return '4'
    case '1/16 - 2px':
      return '2'
    case '0':
      return '0'
    case '1XL - 40px':
      return '40'
    case '2XL - 48px':
      return '48'
    case '3XL - 56px':
      return '56'
    case '4XL - 64px':
      return '64'

    default:
      return spacing
  }
}

// Return manual spacing
export function getManualSpacing(spacing) {
  switch (spacing) {
    case null:
    case undefined:
      return null

    default:
      return spacing
  }
}

// Return percentage
export function getPercentage(percent) {
  switch (percent) {
    case null:
      return 100

    default:
      return percent.replace('%', '')
  }
}

// Return background color
export function getBgColor(color) {
  switch (color) {
    case null:
    case undefined:
    case 'Default':
      return 'page'

    case 'Primary':
      return 'primary'

    case 'Secondary':
      return 'secondary'

    case 'Tertiary':
      return 'tertiary'

    case 'Tertiary - Transposed':
      return 'tertiary-transposed'

    case 'Grey':
      return 'grey'

    case 'Header':
      return 'header'

    case 'Footer':
      return 'footer'

    default:
      return 'page'
  }
}

// Return tint
export function getColorTint(tint) {
  switch (tint) {
    case null:
    case undefined:
      return 'default'

    case 'Default':
      return 'default'

    default:
      return tint
  }
}

export function getColor(color) {
  switch (color) {
    case null:
      return 'transparent'

    default:
      return color
  }
}

// Get contrast
export function getContrast(hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1)
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(function (hex) {
        return hex + hex
      })
      .join('')
  }

  // Convert to RGB value
  var r = parseInt(hexcolor.substr(0, 2), 16)
  var g = parseInt(hexcolor.substr(2, 2), 16)
  var b = parseInt(hexcolor.substr(4, 2), 16)

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000

  // Check contrast
  return yiq >= 128 ? 'light' : 'dark'
}

// Return style
export function getStyle(style) {
  switch (style) {
    case null:
      return 'primary'

    case 'Primary':
      return 'primary'

    case 'Secondary':
      return 'secondary'

    case 'Tertiary':
      return 'tertiary'

    case 'Grey':
      return 'grey'

    case 'White':
      return 'white'

    case 'Black':
      return 'black'

    case 'Link':
      return 'link'

    case 'Transparent':
      return 'transparent'

    default:
      return 'primary'
  }
}

// Return list style
export function getListStyle(style) {
  switch (style) {
    case null:
      return 'disc'

    case 'Disc':
      return 'disc'

    case 'Numbered':
      return 'numbered'

    case 'Square':
      return 'square'

    case 'Checked':
      return 'checked'

    // case 'Ordered':
    //   return 'ordered'

    default:
      return 'disc'
  }
}

// Return opacity value
export function getOpacity(value) {
  switch (value) {
    case null:
    case undefined:
      return 0

    case value:
      if (value >= 100) {
        return 1
      } else {
        return parseFloat(`0.${value}`)
      }

    default:
      return 0
  }
}

// RGB to Hex
// export const getRgb2Hex = (rgb) =>
//   `#${rgb
//     .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
//     .slice(1)
//     .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
//     .join('')}`
//

// rgba
export const getRgb2Hex = (rgba) =>
  `#${rgba
    .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
    .slice(1)
    .map((n, i) =>
      (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
        .toString(16)
        .padStart(2, '0')
        .replace('NaN', '')
    )
    .join('')}`
//

// rgb
export const getRgbOnly2Hex = (rgb) =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('')}`

// Return hexToRGB value
export function getHexToRGB(color, opacity) {
  switch ([color, opacity]) {
    default:
      return hexRgb(color, { alpha: opacity, format: 'array' })
  }
}

// Return overlay (gradient) direction
export function getGradientDirection(direction) {
  switch (direction) {
    case null:
      return '180deg'

    case 'Vertical':
      return '180deg'

    case 'Horizontal':
      return '90deg'

    case 'Top left to bottom right':
      return '45deg'

    case 'Top right to bottom left':
      return '225deg'

    default:
      return '180deg'
  }
}

// Return bGround postion
export function getBGroundPosition(position) {
  switch (position) {
    case null:
      return 'center center'

    default:
      return position.toLowerCase() + ' center'
  }
}

// Return Image format (Landscape / Portrait)
export function getImgFormat(format) {
  switch (format) {
    case 'Landscape':
    case null:
      return 'landscape'

    case 'Portrait':
      return 'portrait'

    case 'Square':
      return 'square'

    case 'Attention':
      return 'attention'

    default:
      return 'landscape'
  }
}

// Return zoom level (Google maps)
export function getZoomLevel(zoom) {
  switch (zoom) {
    case null:
      return 16

    default:
      return zoom
  }
}
