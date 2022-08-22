import React from 'react'

// Helpers
import { Link } from 'gatsby'
import linkResolver from '/src/utils/linkResolver'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const BtnWrapper = styled.span`
  display: flex;
  margin: ${({ theme }) => theme.margin['1/2']} auto 0 auto;

  .btn:focus {
    outline: none;
  }

  .btn {
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    grid-gap: ${({ theme }) => theme.padding['1/4']};
    cursor: pointer;
    user-select: none;
    width: fit-content;
    white-space: nowrap;
    margin: 0 auto;
    /* margin: ${({ theme }) => theme.margin['1/2']} auto 0 auto; */
    padding: 16px ${({ theme }) => theme.padding.default};
    padding: 12px 24px;
    text-align: center;
    text-decoration: none !important;
    font-variation-settings: 'GRAD' 0;
    /* font-weight: 600; */
    font-family: inherit;
    line-height: initial;

    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    color: #ffffff;
    background-color: ${({ theme }) => theme.colors.primary.default};
    border: 1px solid ${({ theme }) => theme.colors.primary[1100]};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    box-sizing: border-box;
    box-shadow: ${({ theme }) => theme.boxShadow.md};
    /* transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1); */
    transition: ${({ theme }) => theme.transition.linear.quick};

    i {
      line-height: 0;
      color: inherit;
      font-variation-settings: 'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48;
      transition: font-variation-settings 0.08s ease;
    }

    @media print {
      display: none;
    }
  }

  .btn.right {
    flex-direction: row-reverse;
  }
  .btn:hover {
    font-variation-settings: 'GRAD' 100;
    box-shadow: ${({ theme }) => theme.boxShadow.lg};

    i {
      font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 48;
    }
  }
  .btn.primary {
    /* color: ${({ theme }) => theme.colors.grey.default}; */
    color: #000000;
    background-color: ${({ theme }) => theme.colors.primary.default};
    border: 1px solid ${({ theme }) => theme.colors.primary[1200]};
    i {
      color: inherit;
    }
  }
  .btn.secondary {
    color: #000000;
    background-color: ${({ theme }) => theme.colors.secondary.default};
    border: 1px solid ${({ theme }) => theme.colors.secondary[1200]};
    i {
      color: inherit;
    }
  }
  .btn.tertiary {
    /* color: ${({ theme }) => theme.colors.grey.default}; */
    color: #000000;
    background-color: ${({ theme }) => theme.colors.tertiary[800]};
    border: 1px solid ${({ theme }) => theme.colors.tertiary[1100]};
    i {
      color: inherit;
    }
  }
  .btn.white {
    color: ${({ theme }) => theme.colors.grey.default};
    background-color: ${({ theme }) => theme.colors.grey[100]};
    border: 1px solid ${({ theme }) => theme.colors.grey[200]};
    i {
      color: inherit;
    }
  }
  .btn.black {
    color: ${({ theme }) => theme.colors.grey[100]};
    background-color: ${({ theme }) => theme.colors.grey[1100]};
    border: 1px solid ${({ theme }) => theme.colors.grey[1200]};
    i {
      color: inherit;
    }
  }

  .btn.link {
    color: ${({ theme }) => theme.colors.grey.default};
    padding: ${({ theme }) => theme.padding['1/8']} ${({ theme }) => theme.padding['1/4']};
    /* margin: 0 ${({ theme }) => theme.padding['1/2']} !important; */
    background-color: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    border-radius: 0;
    box-shadow: none;
    i {
      color: inherit;
    }
  }
  .btn.link:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey.default};
  }

  .dark &,
  .heroBanner & {
    .btn.link {
      color: ${({ theme }) => theme.colors.grey[100]} !important;
      i {
        color: inherit;
      }
    }
    .btn.link:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey[100]};
    }
  }

  .btn.transparent {
    color: ${({ theme }) => theme.colors.grey[100]};
    background-color: transparent;
    /* background-color: #ffffff1a; */
    border: 1px solid ${({ theme }) => theme.colors.grey[100]};
    i {
      color: inherit;
    }
  }

  .light & {
    .btn.transparent {
      color: ${({ theme }) => theme.colors.grey.default};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.grey[100]};
      i {
        color: inherit;
      }
    }
  }

  // Teartiary reverse
  .btn.tertiary-rev {
    color: ${({ theme }) => theme.colors.tertiary.default};
    background-color: ${({ theme }) => theme.colors.tertiary[100]};
    border: 1px solid ${({ theme }) => theme.colors.tertiary[700]};
    i {
      color: inherit;
    }
  }

  // Alert btns
  .alertLevel-1 &,
  .alertLevel-2 &,
  .alertLevel-3 &,
  .alertLevel-4 &,
  .alertLevel-5 & {
    .btn {
      /* padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding.default}; */
      margin: 0 auto ${({ theme }) => theme.margin['1/2']} 0;
      color: #fff;
      background-color: ${({ theme }) => theme.colors.alert.l1[1200]};
      border: 1px solid ${({ theme }) => theme.colors.alert.l1[1300]};
      i {
        color: inherit;
      }
    }

    .btn.link {
      color: ${({ theme }) => theme.colors.grey[100]};
      padding: ${({ theme }) => theme.padding['1/8']} ${({ theme }) => theme.padding['1/4']};
      background-color: transparent;
      border: none;
      border-bottom: 1px solid transparent;
      border-radius: 0;
      box-shadow: none;
    }
    .btn.link:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey[100]};
      i {
        color: inherit;
      }
    }

    .btn.white {
      color: ${({ theme }) => theme.colors.grey.default};
      background-color: ${({ theme }) => theme.colors.grey[100]};
      border: 1px solid ${({ theme }) => theme.colors.grey[200]};
      i {
        color: inherit;
      }
    }
    .btn.black {
      color: ${({ theme }) => theme.colors.grey[100]};
      background-color: ${({ theme }) => theme.colors.grey.default};
      border: 1px solid ${({ theme }) => theme.colors.grey[1200]};
      i {
        color: inherit;
      }
    }
    .btn.transparent {
      color: ${({ theme }) => theme.colors.grey[100]};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.grey[100]};
      i {
        color: inherit;
      }
    }
  }
  .alertLevel-2 & {
    .btn {
      background-color: ${({ theme }) => theme.colors.alert.l2[1200]};
      border: 1px solid ${({ theme }) => theme.colors.alert.l2[1300]};
      i {
        color: inherit;
      }
    }
  }
  .alertLevel-3 & {
    .btn {
      color: ${({ theme }) => theme.colors.grey.default};
      background-color: ${({ theme }) => theme.colors.alert.l3[1200]};
      border: 1px solid ${({ theme }) => theme.colors.alert.l3[1300]};
      i {
        color: inherit;
      }
    }
    .btn.link {
      color: ${({ theme }) => theme.colors.grey.default};
      i {
        color: inherit;
      }
    }
    .btn.link:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey.default};
    }
    .btn.transparent {
      color: ${({ theme }) => theme.colors.grey.default};
      border: 1px solid ${({ theme }) => theme.colors.grey.default};
      i {
        color: inherit;
      }
    }
  }
  .alertLevel-4 & {
    .btn {
      background-color: ${({ theme }) => theme.colors.alert.l4[1200]};
      border: 1px solid ${({ theme }) => theme.colors.alert.l4[1300]};
    }
  }
  .alertLevel-5 & {
    .btn {
      background-color: ${({ theme }) => theme.colors.alert.l5[1200]};
      border: 1px solid ${({ theme }) => theme.colors.alert.l5[1300]};
    }
  }
`
const LinkButton = ({
  buttonLabel,
  buttonType,
  buttonLink,
  buttonStyle,
  onClick,
  buttonIcon,
  buttonIconAlign,
}) => {
  // console.log(buttonLink)

  var btnStyle = ''
  var btnIcon = null
  var btnIconAlign = ''

  if (buttonStyle !== undefined) {
    btnStyle = ' ' + buttonStyle
  }

  if (buttonIcon !== undefined || buttonIcon !== null) {
    btnIcon = buttonIcon
  }
  if (buttonIcon === undefined || buttonIcon === null) {
    btnIcon = null
  }

  // console.log(btnIcon)

  if (buttonIconAlign !== undefined) {
    btnIconAlign = ' ' + buttonIconAlign
  }

  return (
    <BtnWrapper>
      {buttonType.link_type === 'Document' && (
        // <Link to={linkResolver(buttonType)} className={btn   + btnStyle + ' ' + iconAlign}></Link>
        <Link to={linkResolver(buttonType)} className={'btn' + btnStyle + btnIconAlign}>
          {btnIcon !== null && <IconMaterial icon={btnIcon} />}
          {buttonLabel}
        </Link>
      )}

      {buttonType.link_type === 'Web' && (
        <a
          href={buttonType.url}
          rel={buttonType.target === '_blank' && 'noreferrer'}
          target={buttonType.target === '_blank' && '_blank'}
          className={'btn' + btnStyle + btnIconAlign}
        >
          {btnIcon !== null && <IconMaterial icon={btnIcon} />}
          {buttonLabel}
        </a>
      )}

      {buttonType.link_type === 'Media' && (
        <a href={buttonType.url} className={'btn' + btnStyle + btnIconAlign}>
          {btnIcon !== null && <IconMaterial icon={btnIcon} />}
          {buttonLabel}
        </a>
      )}

      {buttonType === 'Static' && (
        <a href={buttonLink} className={'btn' + btnStyle + btnIconAlign}>
          {btnIcon !== null && <IconMaterial icon={btnIcon} />}
          {buttonLabel}
        </a>
      )}

      {buttonType === 'submit' && (
        <button onClick={onClick} type={buttonType} className={'btn' + btnStyle + btnIconAlign}>
          {btnIcon !== null && <IconMaterial icon={btnIcon} />}
          {buttonLabel}
        </button>
      )}

      {buttonType === 'reset' && (
        <button onClick={onClick} type={buttonType} className={'btn' + btnStyle + btnIconAlign}>
          {btnIcon !== null && <IconMaterial icon={btnIcon} />}
          {buttonLabel}
        </button>
      )}

      {buttonType === 'button' && (
        <button onClick={onClick} type={buttonType} className={'btn' + btnStyle + btnIconAlign}>
          {btnIcon !== null && <IconMaterial icon={btnIcon} />}
          {buttonLabel}
        </button>
      )}
    </BtnWrapper>
  )
}

export default LinkButton
