import React from 'react'

// Layout
import Button from '/src/components/common/buttons/linkButton'
import styled from 'styled-components'

const Section = styled.section`
  > div {
    .allBtns {
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
            margin: 0;
          }
        }
      }
    }
  }
`

const StyleSection = ({ spyID }) => {
  return (
    <Section id={spyID}>
      <div>
        <h2>Buttons, AKA - Call to action (CTA)</h2>
        <p>A button can accept the following parameters:</p>
        <ul>
          <li>buttonLabel - A text string to label the button</li>
          <li>
            buttonType - CMS can pass data for type of
            <ul>
              <li>"Document"</li>
              <li>"Web"</li>
              <li>"Media"</li>
              <li>"submit"</li>
              <li>"button"</li>
              <li>Use "Static" for no CMS data</li>
            </ul>
          </li>
          <li>buttonLink - A link that is passed for a Static button type</li>
          <li>
            buttonStyle - Style
            <ul>
              <li>"Primary"</li>
              <li>"Secondary"</li>
              <li>"Tertiary"</li>
              <li>"Black"</li>
              <li>"Transparent"</li>
              <li>"Link"</li>
            </ul>
          </li>
          <li>onClick - Call a JavaScript Function or Const.</li>
          <li>buttonDisabled - Disable the button</li>

          <li>buttonIcon - Material Icon, eg 'contact_page</li>
          <ul>
            <li>
              Go to <a href="https://fonts.google.com/icons">Material Icons Libray</a> and select{' '}
              <strong>rounded</strong> style, copy and pass in the icon CSS name as a parameter to
              select icons. Eg; 'Contact Page will be 'contact_page'.
            </li>
          </ul>
          <li>
            buttonIconAlign - Align
            <ul>
              <li>"left"</li>
              <li>"right"</li>
            </ul>
          </li>
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
      </div>
    </Section>
  )
}

export default StyleSection
