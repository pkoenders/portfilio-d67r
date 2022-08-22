import React from 'react'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../../utils/linkResolver'
import { validateString } from '/src/utils/helpers'
import styled from 'styled-components'

const BlogReferences = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding['1/4']};
  span {
    color: ${({ theme }) => theme.colors.page[700]};
  }
  border-top: 1px solid ${({ theme }) => theme.colors.card[400]};
  padding-top: ${({ theme }) => theme.padding['1/4']};
`

const ReferencesBlog = ({ slice }) => {
  // Validate text
  const content = validateString(slice.primary.references.richText)
  return (
    <>
      {content !== null && (
        <BlogReferences>
          <span>References</span>
          <RichText render={content} linkResolver={linkResolver} />
        </BlogReferences>
      )}
    </>
  )
}

export default ReferencesBlog
