import React from 'react'
// Helpers
// import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../utils/linkResolver'
import { validateString, getContentWidth, getPostionAlign, getStyle } from '/src/utils/helpers'

// Buttons
import Close from '/src/components/common/buttons/close'
import Button from '/src/components/common/buttons/linkButton'

import styled from 'styled-components'

const AlertWrapper = styled.div`
  aspect-ratio: unset !important;
  position: relative;
  padding: ${({ theme }) => theme.padding['1/2']};
  text-align: left;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.alert.l1.default};
  border-top: 1px solid #ffffff54;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    grid-gap: ${({ theme }) => theme.padding['1/4']};
    p {
      margin: 0;
    }

    .cta {
      margin-bottom: 0px;
      /* margin-bottom: ${({ theme }) => theme.margin['1/2']}; */
      span {
        margin-top: ${({ theme }) => theme.margin['1/2']};
        .btn {
          margin: 0;
        }
      }
    }

    &.left {
      text-align: left;
    }
    &.center {
      text-align: center;
      .cta {
        align-items: center;
        margin: 0 auto;
      }
    }
    &.right {
      text-align: right;
      .cta {
        margin: 0 0 0 auto;
      }
    }
  }

  &.alertLevel-1 {
    background-color: ${({ theme }) => theme.colors.alert.l1.default};
    button {
      i {
        color: ${({ theme }) => theme.colors.alert.l1.default};
      }
    }
  }
  &.alertLevel-2 {
    background-color: ${({ theme }) => theme.colors.alert.l2.default};
    button {
      i {
        color: ${({ theme }) => theme.colors.alert.l2.default};
      }
    }
  }
  &.alertLevel-3 {
    color: ${({ theme }) => theme.colors.grey.default};
    background-color: ${({ theme }) => theme.colors.alert.l3.default};
    button {
      i {
        color: ${({ theme }) => theme.colors.alert.l3.default};
        background-color: ${({ theme }) => theme.colors.page.default};
      }
    }
  }
  &.alertLevel-4 {
    background-color: ${({ theme }) => theme.colors.alert.l4.default};
    button {
      i {
        color: ${({ theme }) => theme.colors.alert.l4.default};
      }
    }
  }
  &.alertLevel-5 {
    background-color: ${({ theme }) => theme.colors.alert.l5.default};
    button {
      i {
        color: ${({ theme }) => theme.colors.alert.l5.default};
      }
    }
  }

  button {
    position: absolute;
    display: flex;
    flex-direction: row;
    grid-gap: ${({ theme }) => theme.padding['1/8']};
    top: ${({ theme }) => theme.padding['1/2']};
    right: ${({ theme }) => theme.padding['1/2']};
    text-transform: uppercase;
    font-size: 80%;

    i {
      color: ${({ theme }) => theme.colors.alert.l1.default};
      background-color: #fff;
      /* padding: 0; */
      /* font-size: 20px; */
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
  }

  & .canClose {
    /* padding-right: ${({ theme }) => theme.padding['4xl']}; */
    padding: 0px;
    padding-right: 96px;
  }
`
const Alert = ({
  alertID,
  alertContent,
  alertWidth,
  alertAlign,
  alertLevel,
  alertExpiry,
  alertClose,
  alertBtnLabel,
  alertBtnLink,
  alertBtnIcon,
  alertBtnIconAlign,
  alertBtnSecondaryLabel,
  alertBtnSecondaryLink,
  alertBtnSecondaryStyle,
  alertBtnSecondaryIcon,
  alertBtnSecondaryIconAlign,
}) => {
  // Validate
  const content = alertContent
  const width = getContentWidth(alertWidth)
  const align = getPostionAlign(alertAlign)

  const expiry = validateExpiry(alertExpiry)
  function validateExpiry(date) {
    switch (date) {
      case undefined:
      case null:
        return '9999'
      default:
        return date
    }
  }

  const close = alertClose
  const currentdate = new Date().toISOString()
  const alertLev = validateBgColor(alertLevel)
  function validateBgColor(color) {
    switch (color) {
      case undefined:
      case null:
      case '1 - Green':
        return 'alertLevel-1'
      case '2 - Khaki':
        return 'alertLevel-2'
      case '3 - Yellow':
        return 'alertLevel-3'
      case '4 - Orange':
        return 'alertLevel-4'
      case '5 - Red':
        return 'alertLevel-5'
      default:
        return 'alertLevel-1'
    }
  }

  const alertDesc = validateAlertDesc(alertLevel)
  function validateAlertDesc(color) {
    switch (color) {
      case undefined:
      case null:
      case '1 - Green':
        return 'level 1'
      case '2 - Khaki':
        return 'level 2'
      case '3 - Yellow':
        return 'level 3'
      case '4 - Orange':
        return 'level 4'
      case '5 - Red':
        return 'level 5'
      default:
        return 'level 1'
    }
  }

  // validate btns
  const btnLabel = validateString(alertBtnLabel)
  const btnLink = alertBtnLink
  const btnIcon = alertBtnIcon
  const btnIconAlign = getPostionAlign(alertBtnIconAlign)

  const btnSecondaryLabel = validateString(alertBtnSecondaryLabel)
  const btnSecondaryLink = alertBtnSecondaryLink
  const btnSecondaryStyle = getStyle(alertBtnSecondaryStyle)
  const btnSecondaryIcon = alertBtnSecondaryIcon
  const btnSecondaryIconAlign = getPostionAlign(alertBtnSecondaryIconAlign)

  // console.log('btnSecondaryIcon = ' + btnSecondaryIcon)
  // console.log('btnSecondaryIconAlign = ' + btnSecondaryIconAlign)

  function closeAlert(e) {
    e.target.closest('.alert').remove()
    sessionStorage.setItem(`Alert panel ${alertID}`, true)
  }

  var alertPanelActive
  //When you're rendering on the server, you do not have a browser and thus we do not have access to all the APIs that the browser provides, including localStorage. We need to check if the window is defined.
  if (typeof window !== 'undefined') {
    alertPanelActive = sessionStorage.getItem(`Alert panel ${alertID}`)
  } else {
    alertPanelActive = null
  }

  if (alertPanelActive === null && currentdate < expiry) {
    return (
      <>
        <AlertWrapper
          id={alertID}
          className={'alert section-layout ' + width + ' ' + align + ' ' + alertLev}
          aria-label={`Alert ${alertDesc}`}
        >
          {close === true && <Close onClick={closeAlert} label={'Close'} />}

          {(content.text || btnLabel) && (
            <div className={close === true ? 'canClose' : ''}>
              {content.text && <RichText render={content.raw} linkResolver={linkResolver} />}

              {(btnLabel || btnSecondaryLabel) && (
                <span className={'cta ' + align}>
                  {btnLabel && (
                    <Button
                      buttonLabel={btnLabel}
                      buttonType={btnLink.raw}
                      buttonIcon={btnIcon}
                      buttonIconAlign={btnIconAlign}
                    />
                  )}
                  {btnSecondaryLabel && (
                    <Button
                      buttonLabel={btnSecondaryLabel}
                      buttonType={btnSecondaryLink.raw}
                      buttonStyle={btnSecondaryStyle}
                      buttonIcon={btnSecondaryIcon}
                      buttonIconAlign={btnSecondaryIconAlign}
                    />
                  )}
                </span>
              )}
            </div>
          )}
        </AlertWrapper>
      </>
    )
  } else {
    return null
  }
}

export default Alert
