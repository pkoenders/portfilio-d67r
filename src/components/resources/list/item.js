import React from 'react'

// Helpers
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import linkResolver from '/src/utils/linkResolver'
import { validateString } from '/src/utils/helpers'

// Icons
import IconMaterial from '/src/components/common/icons/material'

// Layout
import ListItem from '/src/components/common/layout/listResults/listItem'
import CardContent from '/src/components/common/layout/listResults/cardContent'
import Tags from '/src/components/common/filter/tags'

const RescourcesItem = ({ resourceItem, id, showTags }) => {
  const item = resourceItem.item.document
  const tagData = resourceItem.item.document.tags.sort()
  const content = resourceItem.item.document.data
  const title = validateString(content.title.text)
  const intro = validateString(content.content.raw)
  const internalLink = validateString(content.web_address.uid)
  const externalLink = validateString(content.web_address.url)
  const phone = validateString(content.phone)
  const location = validateString(content.location)

  return (
    <>
      {item.uid && (
        <ListItem id={id} className={'item show'}>
          <div className="card">
            <CardContent>
              <div className="content">
                {title && <div className="title">{title}</div>}
                {intro && <RichText render={intro} linkResolver={linkResolver} />}
              </div>
              <div className="details">
                {internalLink && (
                  <address>
                    <IconMaterial icon={'arrow_forward'} />
                    {internalLink}
                    <Link to={internalLink}>externalLink</Link>
                  </address>
                )}

                {externalLink && (
                  <a href={externalLink} target="_blank" rel="noreferrer">
                    <IconMaterial icon={'open_in_new'} />
                    {externalLink}
                  </a>
                )}

                {phone && (
                  <a href={`tel:${phone}`}>
                    <IconMaterial icon={'call'} />
                    {phone}
                  </a>
                )}

                {location && (
                  <address>
                    <IconMaterial icon={'place'} />
                    {location}
                  </address>
                )}

                {showTags === true && tagData.length > 0 && <Tags tagData={tagData} />}
              </div>
            </CardContent>
          </div>
        </ListItem>
      )}
    </>
  )
}

export default RescourcesItem
