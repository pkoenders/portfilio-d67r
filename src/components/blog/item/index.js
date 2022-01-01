import React from 'react'

// Helpers
import { validateString } from '/src/utils/helpers'

// Layout
import PageLayout from '/src/components/common/layout/pageLayout/'
import PageHeader from '/src/components/common/layout/pageLayout/header'
import PageBody from '/src/components/common/layout/pageLayout/body'

import SliceZone from '/src/components/slices/sliceZone'

const BlogPost = ({ currentLang, itemData }) => {
  const blogItem = itemData.data
  const title = validateString(blogItem.title.text)
  const date = blogItem.release_date
  // const content = validateString(blogItem.conent.raw)

  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <PageLayout classOverides="sm withSecondaryNav">
      <PageHeader>
        <div className="intro">{title && <h1>{title}</h1>}</div>
      </PageHeader>

      <PageBody className="content">
        {date && <time>{date}</time>}
        <SliceZone currentLang={currentLang} sliceZone={itemData.data.body} />
      </PageBody>
    </PageLayout>
  )
}

export default BlogPost
