import React from 'react'

// Helpers
import { validateString } from '/src/utils/helpers'

// Layout
import PageLayout from '/src/components/common/layout/pageLayout/'
import PageBody from '/src/components/common/layout/pageLayout/body'
import SliceZone from '/src/components/slices/sliceZone'

const BlogPost = ({ currentLang, itemData }) => {
  const blogItem = itemData.data
  const title = validateString(blogItem.title.text)
  const date = blogItem.release_date

  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <PageLayout classOverides="sm withSecondaryNav">
      <div>
        <PageBody className="content">
          {title && <h1>{title}</h1>}
          <div className="blog">
            {date && <time>{date}</time>}
            <SliceZone currentLang={currentLang} sliceZone={itemData.data.body} />
          </div>
        </PageBody>
      </div>
    </PageLayout>
  )
}

export default BlogPost
