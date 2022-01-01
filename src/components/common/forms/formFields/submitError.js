import React from 'react'

import Button from '/src/components/common/buttons/linkButton'

import IconSubmitError from '/src/images/svg/icon-contact-error.inline.svg'

import styled from 'styled-components'

const Error = styled.div`
  flex-direction: column;
  grid-row-gap: ${({ theme }) => theme.padding['1/2']} !important;
  grid-column-gap: ${({ theme }) => theme.padding['1/4']} !important;
  margin: ${({ theme }) => theme.margin.default} ${({ theme }) => theme.padding['1/4']};
  p:first-of-type {
    font-size: 133%;
    font-weight: 500;
    margin: 0;
  }

  svg {
    margin: 0;
    width: ${({ theme }) => theme.padding['1xl']};
    height: auto;
    /* color: ${({ theme }) => theme.colors.grey[400]}; */
    color: ${({ theme }) => theme.colors.alert.tomato};
  }

  span {
    margin: 0 auto 0 0;
    .btn {
      margin-top: ${({ theme }) => theme.margin['1/2']};
    }
  }
`

const SubmitError = ({ resetForm }) => {
  return (
    <Error className={'formSuccess'}>
      <IconSubmitError aria-hidden="true" />
      <p>Sorry, there has been an error</p>
      <p>Could you please try and complete the form again.</p>
      <Button
        buttonLabel={'Reset form'}
        buttonType={'reset'}
        buttonStyle={'black'}
        onClick={resetForm}
        buttonIcon={'refresh'}
        buttonIconAlign={'left'}
      />
    </Error>
  )
}
export default SubmitError
