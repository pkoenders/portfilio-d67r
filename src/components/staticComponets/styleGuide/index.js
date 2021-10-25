import React from 'react'

// Layout
import Section from '/src/components/common/layout/pageLayout/'
import Button from '/src/components/common/buttons/linkButton'

import styled from 'styled-components'

const StyleGuide = styled.div`

  margin: ${({ theme }) => theme.margin['4xl']} 0;

  /* padding: 0 ${({ theme }) => theme.padding['1/2']}; */


  .section{
    margin: ${({ theme }) => theme.padding['1/2']} 0;
  }
  .serif{
    font-family: ${({ theme }) => theme.font.serif};
  }

  .mono{
    font-family: ${({ theme }) => theme.font.mono};
  }
  .subHeading {
    text-align: left;
    align-self: flex-start;
    font-weight: 500;
    padding: ${({ theme }) => theme.padding['1/2']} 0};
  }

  .typographyStyles {
    display: flex;
    margin-top: ${({ theme }) => theme.margin.default};
      flex-direction: column;
      grid-gap: ${({ theme }) => theme.padding['1/4']};
      h1,h2,h3,h4,h5,p {
        margin: 0;
      }
      p:last-of-type {
        margin-bottom: ${({ theme }) => theme.padding['1/2']};
      }
  }

  .cta {
    .allBtns{
      display: flex;
      flex-direction: column;
      grid-gap: ${({ theme }) => theme.padding.default};
      .btnGroup {  
        display: flex;
        flex-direction: row;
        grid-gap: ${({ theme }) => theme.padding['1/2']};
        span {
          margin: 0;
          .btn {
            margin:0
          }
        }
      }
    }
  }
  

  .colors {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.padding['1/2']} 0;
    p {
      align-self: flex-start;
      margin-bottom: ${({ theme }) => theme.padding['1/4']};

    }

    span {
      width: 100%;
      padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/2']};
      /* background-color: ${({ theme }) => theme.colors.primary.default}; */
    }

    span.default {
      font-weight: 600;
    }
    span.dark {
      color: #fff;
    }
  }

  .padding {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: ${({ theme }) => theme.padding['1/4']};

      span {
        aspect-ratio: 1;
        margin: ${({ theme }) => theme.padding['1/4']} 0;
        background-color: ${({ theme }) => theme.colors.card.default};
      }
      span.default {
        width: ${({ theme }) => theme.padding.default};
      }
      span.half {
        width: ${({ theme }) => theme.padding['1/2']};
      }
      span.quarter {
        width: ${({ theme }) => theme.padding['1/4']};
      }
      span.eighth {
        width: ${({ theme }) => theme.padding['1/8']};
      }
      span.sixteenth {
        width: ${({ theme }) => theme.padding['1/16']};
      }
      span.xl {
        width: ${({ theme }) => theme.padding['1xl']};
      }
      span.xxl {
        width: ${({ theme }) => theme.padding['2xl']};
      }
      span.xxxl {
        width: ${({ theme }) => theme.padding['3xl']};
      }
      span.xxxxl {
        width: ${({ theme }) => theme.padding['4xl']};
      }
    }
  }
`

const Styleguide = () => {
  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <Section contentSize={'sm'}>
      <StyleGuide>
        <div className="intro">
          <h1>Style guide</h1>
          <p>
            This style guide is a reference for key design elements of the website. The guide also
            includes colour scheme, typography, spacing, icons, imagery, and visual language. Site
            administrators should update new and modified styles on this page.
          </p>
          <div className="section">
            <p>
              <strong>Typography</strong>
              <br />
              Fonts are selected and preloaded from the Google Font library along with icons from
              Material Icons. For consistency, avoid applying a bold style to heading fonts.
            </p>
            <p>
              Go to <a href="https://fonts.google.com/icons">Material Icons Libray</a> and select
              rounded style, copy and pass in the icon CSS name as a parameter to select icons. Eg;
              'Contact Page will be 'contact_page'.
            </p>
            <div className="typographyStyles">
              <h1>Heading 1 - slab 'Rokkitt, serif'</h1>
              <h2>Heading 2 - slab 'Rokkitt, serif'</h2>
              <h3>Heading 3 - sans 'Open sans, sans-serif'</h3>
              <h4>Heading 4 - sans 'Open sans, sans-serif'</h4>
              <h5>Heading 5 - sans 'Open sans, sans-serif'</h5>
              <p>Paragraph - sans 'Open sans, sans-serif'</p>
              <p className="serif">Serif - '"Bodoni Moda", serif'</p>
              <p className="mono">Mono - 'Menlo', 'Monaco'</p>
            </div>
          </div>

          <div className="section cta">
            <p>
              <strong>Call to action (CTA)</strong>
              <br />A button can accept the following parameters:
              <ul>
                <li>buttonLabel - The label for the button</li>
                <li>
                  buttonType - CMS passing data for a Document, Web, Media, submit and button. Use
                  Static for no CMS data
                </li>
                <li>buttonLink - A link that is passed for a Static button type</li>
                <li>
                  buttonStyle - Primary, Secondary, Tertiary, Black, White, Transparent or Link
                </li>
                <li>onClick - Call a JavaScript Function or Const</li>
                <li>buttonDisabled - Disable the button</li>
                <li>buttonIcon - Material Icon, eg 'contact_page</li>
                <li>buttonIconAlign - Align 'left' or 'right'</li>
              </ul>
              <div className="allBtns">
                <div className="btnGroup">
                  <Button
                    buttonLabel={'Primary'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'primary'}
                  />
                  <Button
                    buttonLabel={'Icon left'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'primary'}
                    buttonIcon={'thumb_up'}
                    buttonIconAlign={'left'}
                  />
                  <Button
                    buttonLabel={'Icon right'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'primary'}
                    buttonIcon={'thumb_down'}
                    buttonIconAlign={'right'}
                  />
                </div>
                <div className="btnGroup">
                  <Button
                    buttonLabel={'Secondary'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'secondary'}
                  />
                  <Button
                    buttonLabel={'Icon left'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'secondary'}
                    buttonIcon={'favorite'}
                    buttonIconAlign={'left'}
                  />
                  <Button
                    buttonLabel={'Icon right'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'secondary'}
                    buttonIcon={'heart_broken'}
                    buttonIconAlign={'right'}
                  />
                </div>
                <div className="btnGroup">
                  <Button
                    buttonLabel={'Tertiary'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'tertiary'}
                  />
                  <Button
                    buttonLabel={'Icon left'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'tertiary'}
                    buttonIcon={'trending_up'}
                    buttonIconAlign={'left'}
                  />
                  <Button
                    buttonLabel={'Icon right'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'tertiary'}
                    buttonIcon={'savings'}
                    buttonIconAlign={'right'}
                  />
                </div>
                <div className="btnGroup">
                  <Button
                    buttonLabel={'Black'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'black'}
                  />
                  <Button
                    buttonLabel={'Icon left'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'black'}
                    buttonIcon={'lock_open'}
                    buttonIconAlign={'left'}
                  />
                  <Button
                    buttonLabel={'Icon right'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'black'}
                    buttonIcon={'https'}
                    buttonIconAlign={'right'}
                  />
                </div>
                <div className="btnGroup">
                  <Button
                    buttonLabel={'White'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'white'}
                  />
                  <Button
                    buttonLabel={'Icon left'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'white'}
                    buttonIcon={'vertical_split'}
                    buttonIconAlign={'left'}
                  />
                  <Button
                    buttonLabel={'Icon right'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'white'}
                    buttonIcon={'horizontal_split'}
                    buttonIconAlign={'right'}
                  />
                </div>
                <div className="btnGroup">
                  <Button
                    buttonLabel={'Transparent'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'transparent'}
                  />
                  <Button
                    buttonLabel={'Icon left'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'transparent'}
                    buttonIcon={'text_rotation_angleup'}
                    buttonIconAlign={'left'}
                  />
                  <Button
                    buttonLabel={'Icon right'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'transparent'}
                    buttonIcon={'text_rotation_angledown'}
                    buttonIconAlign={'right'}
                  />
                </div>
                <div className="btnGroup">
                  <Button
                    buttonLabel={'Link'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'link'}
                  />
                  <Button
                    buttonLabel={'Icon left'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'link'}
                    buttonIcon={'arrow_back'}
                    buttonIconAlign={'left'}
                  />
                  <Button
                    buttonLabel={'Icon right'}
                    buttonType={'Static'}
                    buttonLink={'/'}
                    buttonStyle={'link'}
                    buttonIcon={'arrow_forward'}
                    buttonIconAlign={'right'}
                  />
                </div>
              </div>
            </p>
          </div>

          <div className="section">
            <p>
              <strong>Colours</strong>
              <br />
              Website colours are predefined and restricted to keep consistency and ensure colours
              are matched as close as an be as complementarities.
            </p>
            <ul>
              <li>Page - Text colour</li>
              <li>Primary</li>
              <li>Seconday</li>
              <li>Tertiary</li>
              <li>Grey</li>
              <li>Cards</li>
              <li>Header</li>
              <li>Footer</li>
              <li>Alerts</li>
            </ul>
            <p>
              All colours have a tint value from 900 - 100 with the exception of Alert colours.
              Primary, Secondary and Tertiary colours have an additional shade value from 1100 -
              1300
            </p>
            <div className="colors">
              <p>
                <strong>Page</strong>
              </p>
              <span className="background-page-default default dark">Page default</span>
              <span className="background-page-900 dark">Page 900</span>
              <span className="background-page-800 dark">Page 800</span>
              <span className="background-page-700 dark">Page 700</span>
              <span className="background-page-600 dark">Page 600</span>
              <span className="background-page-500 dark">Page 500</span>
              <span className="background-page-400">Page 400</span>
              <span className="background-page-300">Page 300</span>
              <span className="background-page-200">Page 200</span>
              <span className="background-page-100">Page 100</span>
            </div>

            <div className="colors">
              <p>
                <strong>Primary</strong>
              </p>
              <span className="background-primary-1300 dark">Primary 1300</span>
              <span className="background-primary-1200 dark">Primary 1200</span>
              <span className="background-primary-1100 dark">Primary 1100</span>
              <span className="background-primary-default default dark">Primary default</span>
              <span className="background-primary-900">Primary 900</span>
              <span className="background-primary-800">Primary 800</span>
              <span className="background-primary-700">Primary 700</span>
              <span className="background-primary-600">Primary 600</span>
              <span className="background-primary-500">Primary 500</span>
              <span className="background-primary-400">Primary 400</span>
              <span className="background-primary-300">Primary 300</span>
              <span className="background-primary-200">Primary 200</span>
              <span className="background-primary-100">Primary 100</span>
            </div>

            <div className="colors">
              <p>
                <strong>Secondary</strong>
              </p>
              <span className="background-secondary-1300 dark">Secondary 1300</span>
              <span className="background-secondary-1200 dark">Secondary 1200</span>
              <span className="background-secondary-1100 dark">Secondary 1100</span>
              <span className="background-secondary-default default dark">Secondary default</span>
              <span className="background-secondary-900">Secondary 900</span>
              <span className="background-secondary-800">Secondary 800</span>
              <span className="background-secondary-700">Secondary 700</span>
              <span className="background-secondary-600">Secondary 600</span>
              <span className="background-secondary-500">Secondary 500</span>
              <span className="background-secondary-400">Secondary 400</span>
              <span className="background-secondary-300">Secondary 300</span>
              <span className="background-secondary-200">Secondary 200</span>
              <span className="background-secondary-100">Secondary 100</span>
            </div>

            <div className="colors">
              <p>
                <strong>Tertiary</strong>
              </p>
              <span className="background-tertiary-1300">Tertiary 1300</span>
              <span className="background-tertiary-1200">Tertiary 1200</span>
              <span className="background-tertiary-1100">Tertiary 1100</span>
              <span className="background-tertiary-default default">Tertiary default</span>
              <span className="background-tertiary-900">Tertiary 900</span>
              <span className="background-tertiary-800">Tertiary 800</span>
              <span className="background-tertiary-700">Tertiary 700</span>
              <span className="background-tertiary-600">Tertiary 600</span>
              <span className="background-tertiary-500">Tertiary 500</span>
              <span className="background-tertiary-400">Tertiary 400</span>
              <span className="background-tertiary-300">Tertiary 300</span>
              <span className="background-tertiary-200">Tertiary 200</span>
              <span className="background-tertiary-100">Tertiary 100</span>
            </div>

            <div className="colors">
              <p>
                <strong>Grey</strong>
              </p>
              <span className="background-grey-default default dark">Grey default</span>
              <span className="background-grey-900 dark">Grey 900</span>
              <span className="background-grey-800 dark">Grey 800</span>
              <span className="background-grey-700 dark">Grey 700</span>
              <span className="background-grey-600 dark">Grey 600</span>
              <span className="background-grey-500">Grey 500</span>
              <span className="background-grey-400">Grey 400</span>
              <span className="background-grey-300">Grey 300</span>
              <span className="background-grey-200">Grey 200</span>
              <span className="background-grey-100">Grey 100</span>
            </div>

            <div className="colors">
              <p>
                <strong>Card</strong>
              </p>
              <span className="background-card-default default dark">Card default</span>
              <span className="background-card-900 dark">Card 900</span>
              <span className="background-card-800 dark">Card 800</span>
              <span className="background-card-700 dark">Card 700</span>
              <span className="background-card-600 dark">Card 600</span>
              <span className="background-card-500">Card 500</span>
              <span className="background-card-400">Card 400</span>
              <span className="background-card-300">Card 300</span>
              <span className="background-card-200">Card 200</span>
              <span className="background-card-100">Card 100</span>
            </div>

            <div className="colors">
              <p>
                <strong>Header</strong>
              </p>
              <span className="background-header-default default dark">Header default</span>
              <span className="background-header-900 dark">Header 900</span>
              <span className="background-header-800 dark">Header 800</span>
              <span className="background-header-700 dark">Header 700</span>
              <span className="background-header-600 dark">Header 600</span>
              <span className="background-header-500 dark">Header 500</span>
              <span className="background-header-400">Header 400</span>
              <span className="background-header-300">Header 300</span>
              <span className="background-header-200">Header 200</span>
              <span className="background-header-100">Header 100</span>
            </div>

            <div className="colors">
              <p>
                <strong>Footer</strong>
              </p>
              <span className="background-footer-default default dark">Footer default</span>
              <span className="background-footer-900 dark">Footer 900</span>
              <span className="background-footer-800 dark">Footer 800</span>
              <span className="background-footer-700 dark">Footer 700</span>
              <span className="background-footer-600 dark">Footer 600</span>
              <span className="background-footer-500 dark">Footer 500</span>
              <span className="background-footer-400">Footer 400</span>
              <span className="background-footer-300">Footer 300</span>
              <span className="background-footer-200">Footer 200</span>
              <span className="background-footer-100">Footer 100</span>
            </div>
          </div>
          <div className="colors">
            <p>
              <strong>Alerts</strong>
            </p>
            <span className="background-alert-tomato default dark">Tomato</span>
          </div>

          <div className="colors">
            <span className="background-alert-l1-default default dark">Alert Level 1 default</span>
            <span className="background-alert-l1-1100 dark">Alert Level 1 1100</span>
            <span className="background-alert-l1-1200 dark">Alert Level 1 1200</span>
            <span className="background-alert-l1-1300 dark">Alert Level 1 1300</span>
          </div>

          <div className="colors">
            <span className="background-alert-l2-default default dark">Alert Level 2 default</span>
            <span className="background-alert-l2-1100 dark">Alert Level 2 1100</span>
            <span className="background-alert-l2-1200 dark">Alert Level 2 1200</span>
            <span className="background-alert-l2-1300 dark">Alert Level 2 1300</span>
          </div>

          <div className="colors">
            <span className="background-alert-l3-default default">Alert Level 3 default</span>
            <span className="background-alert-l3-1100">Alert Level 3 1100</span>
            <span className="background-alert-l3-1200">Alert Level 3 1200</span>
            <span className="background-alert-l3-1300">Alert Level 3 1300</span>
          </div>

          <div className="colors">
            <span className="background-alert-l4-default default dark">Alert Level 4 default</span>
            <span className="background-alert-l4-1100 dark">Alert Level 4 1100</span>
            <span className="background-alert-l4-1200 dark">Alert Level 4 1200</span>
            <span className="background-alert-l4-1300 dark">Alert Level 4 1300</span>
          </div>

          <div className="colors">
            <span className="background-alert-l5-default default dark">Alert Level 5 default</span>
            <span className="background-alert-l5-1100 dark">Alert Level 5 1100</span>
            <span className="background-alert-l5-1200 dark">Alert Level 5 1200</span>
            <span className="background-alert-l5-1300 dark">Alert Level 5 1300</span>
          </div>

          <div className="section padding">
            <p>
              <strong>Padding and margins</strong>
              <br />
              The default padding and margin is 32px with variants to reduce or expand.
            </p>

            <div>
              <span className="padding sixteenth"></span>
              1/16 - 2px
            </div>
            <div>
              <span className="padding eighth"></span>
              1/8 - 4px
            </div>
            <div>
              <span className="padding quarter"></span>
              1/4 - 8px
            </div>
            <div>
              <span className="padding half"></span>
              1/2 - 16px
            </div>
            <div>
              <span className="padding default"></span>
              Default - 32px
            </div>
            <div>
              <span className="padding xl"></span>
              1XL - 40px
            </div>
            <div>
              <span className="padding xxl"></span>
              2XL - 48px
            </div>
            <div>
              <span className="padding xxxl"></span>
              3XL - 56px
            </div>
            <div>
              <span className="padding xxxxl"></span>
              4XL - 64px
            </div>
          </div>
        </div>
      </StyleGuide>
    </Section>
  )
}

export default Styleguide
