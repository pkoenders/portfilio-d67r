import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Helpers
import i18n from '/config/i18n'
import { RichText } from 'prismic-reactjs'
import linkResolver from '/src/utils/linkResolver'
import { validateString } from '/src/utils/helpers'

// Layout
import Section from '/src/components/common/layout/pageLayout/'
import SupporterForm from '/src/components/common/forms/formContact'
import Tags from '/src/components/common/filter/tags'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const SupportersHeader = styled.div`
  display: flex;

  grid-gap: ${({ theme }) => theme.padding.default};
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
  }
  margin: ${({ theme }) => theme.padding['4xl']} auto ${({ theme }) => theme.padding.default} auto;
  border-bottom: 4px solid ${({ theme }) => theme.colors.secondary[300]};

  & .intro {
    width: 60%;
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    margin-bottom: ${({ theme }) => theme.margin['1/4']};
    @media (max-width: ${({ theme }) => theme.screens.md}) {
      padding-right: 0;
      width: 100%;
    }
    span {
      display: flex;
      align-items: center;
      img {
        width: 75px !important;
        height: 75px !important;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.secondary[400]};
        margin-right: ${({ theme }) => theme.margin['1/2']};
      }
    }

    .location {
      grid-gap: ${({ theme }) => theme.padding.default};
      padding: 0;
      margin: 0;
      color: ${({ theme }) => theme.colors.page[700]};

      span {
        margin: 0;
        flex-wrap: wrap;
        grid-column-gap: ${({ theme }) => theme.margin.default};
        grid-row-gap: ${({ theme }) => theme.margin['1/4']};

        time,
        address,
        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 0;
          width: fit-content;
          white-space: nowrap;
          grid-gap: ${({ theme }) => theme.margin['1/4']};

          i {
            color: ${({ theme }) => theme.colors.secondary.default};
          }
        }
      }
    }
  }
  & .tags {
    width: 40%;
    margin-bottom: ${({ theme }) => theme.margin['1/2']};
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      width: 100%;
    }
    display: flex;
    align-self: flex-end;
  }
`

const SupportersBody = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
  }
  grid-gap: ${({ theme }) => theme.padding.default};
  & .content {
    width: 60%;
    padding-right: ${({ theme }) => theme.padding.default};
    @media (max-width: ${({ theme }) => theme.screens.md}) {
      padding-right: 0;
      width: 100%;
    }
    font-size: 110%;
  }
  & .contact {
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    width: 40%;
    @media (max-width: ${({ theme }) => theme.screens.md}) {
      width: 100%;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      grid-row-gap: ${({ theme }) => theme.padding['1/4']};
      grid-column-gap: ${({ theme }) => theme.padding['1/2']};
      text-indent: ${({ theme }) => theme.padding['1/4']};
      address {
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        grid-gap: ${({ theme }) => theme.margin['1/4']};
        i {
          color: ${({ theme }) => theme.colors.secondary.default};
        }
      }
    }
  }
`

const supportersItem = ({ currentLang, itemData }) => {
  //console.log(galleyItemTags.tags)
  const tagData = itemData.tags.sort()
  const supportersItem = itemData.data
  const firstName = validateString(supportersItem.first_name.text)
  const lastName = validateString(supportersItem.last_name.text)
  const fullName = firstName + ' ' + lastName
  const introText = validateString(supportersItem.intro.text)
  const mainContent = validateString(supportersItem.content.raw)
  const gender = validateString(supportersItem.gender)
  const location = validateString(supportersItem.location)

  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <Section contentSize={'lg'}>
      <div>
        <SupportersHeader>
          <div className="intro">
            <span>
              {supportersItem.image && (
                <GatsbyImage
                  image={supportersItem.image.localFile.childImageSharp.gatsbyImageData}
                  alt={supportersItem.image.alt ? supportersItem.image.alt : fullName}
                />
              )}
              {firstName && <h1>{fullName}</h1>}
            </span>
            {introText && <p className="date">{introText}</p>}
            <div className="location">
              <span>
                {location && (
                  <address aria-label="Location">
                    <IconMaterial icon={'person_pin_circle'} />
                    {location}
                  </address>
                )}
                {gender && (
                  <address aria-label="Gender">
                    <IconMaterial icon={'face'} />
                    {gender}
                  </address>
                )}
              </span>
            </div>
          </div>
          <Tags tagData={tagData} />
        </SupportersHeader>

        <SupportersBody>
          <div className="content">
            {mainContent && <RichText render={mainContent} linkResolver={linkResolver} />}
          </div>
          <div className="contact">
            <div>
              {firstName && (
                <address>
                  <IconMaterial icon={'mail'} />
                  {i18n[currentLang].contact} {firstName}
                </address>
              )}
            </div>

            <SupporterForm formData={itemData.data} />
          </div>
        </SupportersBody>
      </div>
    </Section>
  )
}

export default supportersItem
