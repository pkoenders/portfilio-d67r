import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import FormWrapper from '/src/components/common/forms/formWrapper'

import styled from 'styled-components'
// www.npmjs.com/package/react-colorful
import { HexColorPicker } from 'react-colorful'

import SwatchCopy from './swatchCopy'

const ColorPicker = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.page[100]};

  margin: ${({ theme }) => theme.margin['1/4']} 0;
  /* Responsive */

  .resposive {
    /* width: 100%; */

    .react-colorful {
      width: 100%;
      div {
        border-radius: 0;
      }
      .react-colorful__pointer {
        border: 2px solid #fff !important;
      }
    }
    .bgroundColor {
      display: flex;
      align-items: center;
      width: 100%;
      height: 96px;
      span {
        background-color: #ffffff;
        padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/2']};
      }
      &:hover {
        button {
          margin: 0 auto;
          opacity: 1;
        }
      }
    }
  }

  .details {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* border-top: 1px solid ${({ theme }) => theme.colors.page[100]}; */
    background-color: #ffffff;
    span {
      padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/2']};

      width: 50%;
      /* display: flex;
      flex-direction: row; */
    }
    span.pastColor {
      display: flex;
      align-items: center;
      padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding.default};

      .inputWrapper {
        margin: 0 auto;
        input {
          width: 112px;

          text-align: center;
          padding: ${({ theme }) => theme.padding['1/2']};
        }
        & input::placeholder {
          color: inherit;
          opacity: 1;
          text-indent: 0;
        }
      }
    }
  }
`

const ColorPickerHex = () => {
  const theme = useTheme()

  var compareColor = theme.colors.primary.default

  const [inputValue, setInputValue] = useState(theme.colors.primary.default)
  // Set Input Field handler
  const setInputField = (e) => {
    setInputValue(e)
  }
  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue('')
  }
  compareColor = inputValue

  const [color, setColor] = useState(theme.colors.primary.default)

  var hexColor = color
  if (hexColor.slice(0, 1) === '#') {
    hexColor = hexColor.slice(1)
  }

  // Convert to RGB value
  var r = parseInt(hexColor.substr(0, 2), 16)
  var g = parseInt(hexColor.substr(2, 2), 16)
  var b = parseInt(hexColor.substr(4, 2), 16)

  const [resetCopyIcon, setResetCopyIcon] = useState(1)

  function ResetCopyIcon() {
    setResetCopyIcon((prevState) => prevState + 1)
  }

  return (
    <ColorPicker>
      <div className="resposive swatchWrapper">
        <HexColorPicker color={color} onChange={setColor} />

        <div
          className="bgroundColor"
          role="button"
          tabIndex="-1"
          onMouseEnter={ResetCopyIcon}
          style={{ backgroundColor: color }}
        >
          <SwatchCopy resetCopyIcon={resetCopyIcon} />
        </div>

        <div className="details ">
          <span>
            Colour picker
            <br />
            Hex: <strong className="colorValHex">{color}</strong>
            <br />
            Rgb: <strong>rgb({r + `,` + g + `,` + b} </strong>)
          </span>
          <span className="pastColor" style={{ backgroundColor: compareColor }}>
            <FormWrapper className="inputWrapper">
              <input
                id=""
                type="text"
                placeholder="Paste hex"
                name=""
                required=""
                value={inputValue}
                onFocus={resetInputField}
                // onClick={resetInputField}
                onChange={(e) => setInputField(e.target.value)}
              />
            </FormWrapper>
          </span>
        </div>
      </div>
    </ColorPicker>
  )
}

export default ColorPickerHex
