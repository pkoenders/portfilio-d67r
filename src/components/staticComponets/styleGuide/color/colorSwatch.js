import React from 'react'
import { useTheme } from 'styled-components'

import styled from 'styled-components'
import SwatchColor from './swatchColor'
import SwatchProps from './swatchProps'

const SwatchComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.page[100]};
  background-color: #ffffff;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.default};
  }
  .swatchChildren {
    display: grid;
    width: 100%;
    padding: ${({ theme }) => theme.padding['1/2']};
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    grid-template-columns: repeat(3, 1fr);
  }
`
const ColorSwatch = ({ color, shadeCount, tintCount }) => {
  const theme = useTheme()
  // console.log('color = ' + color)

  let colorId = color + '.default'
  let shadeId = color
  let tintId = color

  // How many shades and tints are we rendering?
  var shades = Array.from({ length: shadeCount }, (_, i) => i + 1)
  var tints = Array.from({ length: tintCount }, (_, i) => i + 1)

  return (
    <>
      {/* Render Swatch - Default */}
      <SwatchComponent className="swatchWrapper">
        <SwatchColor
          iD={colorId}
          bgColor={`${colorId.split('.').reduce((o, i) => o[i], theme.colors)}`}
        />
        <SwatchProps className={'default'} colorStyle={colorId} colorHexId={colorId} />

        {shades.length > 0 || tints.length > 0 ? (
          <div className="swatchChildren">
            {/* Render Swatches - Shades */}
            {shades.map((e, x) => (
              <SwatchComponent className="swatchWrapper" key={x}>
                <SwatchColor
                  iD={shadeId + '.1' + (shades.length - x) + '00'}
                  bgColor={`${(shadeId + '.1' + (shades.length - x) + '00')
                    .split('.')
                    .reduce((o, i) => o[i], theme.colors)}`}
                />
                <SwatchProps
                  colorStyle={shadeId + '.1' + (shades.length - x) + '00'}
                  colorHexId={shadeId + '.1' + (shades.length - x) + '00'}
                />
              </SwatchComponent>
            ))}

            {/* Render Swatches - Tints */}
            {tints.map((e, x) => (
              <SwatchComponent className="swatchWrapper" key={x}>
                <SwatchColor
                  iD={tintId + '.' + (tints.length - x) + '00'}
                  bgColor={`${(tintId + '.' + (tints.length - x) + '00')
                    .split('.')
                    .reduce((o, i) => o[i], theme.colors)}`}
                />
                <SwatchProps
                  colorStyle={tintId + '.' + (tints.length - x) + '00'}
                  colorHexId={tintId + '.' + (tints.length - x) + '00'}
                />
              </SwatchComponent>
            ))}
          </div>
        ) : (
          ''
        )}
      </SwatchComponent>
    </>
  )
}

export default ColorSwatch
