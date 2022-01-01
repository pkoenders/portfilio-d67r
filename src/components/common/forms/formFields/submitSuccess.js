import React from 'react'

import Button from '/src/components/common/buttons/linkButton'

import IconSubmitSuccess from '/src/images/svg/icon-contact-success.inline.svg'

import styled from 'styled-components'

const Success = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${({ theme }) => theme.padding['1/2']} !important;
  grid-column-gap: ${({ theme }) => theme.padding['1/4']} !important;
  margin: ${({ theme }) => theme.margin.default} ${({ theme }) => theme.padding['1/4']};
  p:first-of-type {
    font-size: 125%;
    font-weight: 500;
    margin: 0;
  }

  svg {
    margin: 0;
    width: ${({ theme }) => theme.padding['1xl']};
    height: auto;
    // opacity: 0.6;
    color: ${({ theme }) => theme.colors.alert.l1.default};
  }

  span {
    margin: 0 auto 0 0;
    .btn {
      margin-top: ${({ theme }) => theme.margin['1/2']};
    }
  }
`

const SubmitSuccess = ({ resetForm }) => {
  return (
    <Success>
      <IconSubmitSuccess aria-hidden="true" />
      <p>Thank you</p>
      <p>We have recieved your enquiry and will get back to you soon.</p>
      <Button
        buttonLabel={'Reset form'}
        buttonType={'reset'}
        buttonStyle={'primary'}
        onClick={resetForm}
        buttonIcon={'refresh'}
        buttonIconAlign={'left'}
      />
    </Success>
  )
}
export default SubmitSuccess
