import React from 'react'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../../utils/linkResolver'
import { validateString } from '/src/utils/helpers'

import styled from 'styled-components'

const TextBlogWrapper = styled.div`
  max-width: ${({ theme }) => theme.screens.sm};
  margin: 0 auto;
}
`

const TextBlog = ({ slice }) => {
  // Validate text
  const content = validateString(slice.primary.text.richText)
  return (
    <TextBlogWrapper>
      {content !== null ? <RichText render={content} linkResolver={linkResolver} /> : ''}
    </TextBlogWrapper>
  )
}

export default TextBlog
