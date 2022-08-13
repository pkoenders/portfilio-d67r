import React from 'react'

// Layout
import ColorWheelSvg from '/src/images/svg/colorWheel.inline.svg'
import ColorPickerColorful from './colorPickerColorful'
import ColorSwatch from './colorSwatch'
import styled from 'styled-components'

const Section = styled.section`
  > div {
    .colorWheel {
      width: 100%;
      margin: ${({ theme }) => theme.padding.default} 0;
    }
    .colourPsychologyWrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-content: stretch;
      grid-gap: ${({ theme }) => theme.padding['1/2']};
      .colourPsychology {
        padding: ${({ theme }) => theme.padding['1/2']};
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 1px solid #d0d0d0;
        p {
          font-size: 24px;
        }
        &.pink {
          color: #ffffff;
          background-color: #e10071;
        }
        &.red {
          color: #ffffff;
          background-color: #ff0000;
        }
        &.orange {
          color: #ffffff;
          background-color: #ff8000;
        }
        &.yellow {
          background-color: #fff924;
        }
        &.green {
          background-color: #70f974;
        }
        &.blue {
          color: #ffffff;
          background-color: #0080ff;
        }
        &.purple {
          color: #ffffff;
          background-color: #8000ff;
        }
        &.brown {
          color: #ffffff;

          background-color: #6d340d;
        }
        &.black {
          color: #ffffff;

          background-color: #0f1113;
        }
        &.grey {
          color: #ffffff;
          background-color: #595959;
        }
        &.white {
          background-color: #ffffff;
        }
      }
    }
    .colors {
      display: flex;
      flex-direction: column;

      align-items: center;
      padding: ${({ theme }) => theme.padding['1/2']} 0;
      h3,
      h4 {
        align-self: flex-start;
        margin-bottom: ${({ theme }) => theme.margin['1/4']};
      }
      p {
        align-self: flex-start;
        margin-bottom: ${({ theme }) => theme.padding['1/4']};
      }

      .swatchList {
        display: grid;
        width: 100%;
        grid-gap: ${({ theme }) => theme.padding['1/2']};
        grid-template-columns: repeat(3, 1fr);
        /* grid-template-columns: repeat(auto-fit, minmax(176px, 1fr)); */
      }

      .swatchList > div:first-child {
        grid-column: span 3;
      }
    }
  }
`

const StyleSection = ({ spyID }) => {
  return (
    <Section id={spyID}>
      <div>
        <h2>What is a website colour scheme?</h2>
        <p className="largeParaText x18">
          Colours are the first thing people notice when they visit your site, and your colour
          scheme can make a huge impact on both style and consistency. Learn how to choose the right
          colour palette, and work it into your site's design system.
        </p>
        <p>
          A website colour scheme is the collection of colours that a designer chooses for their
          website design. Also known as colour palettes, colour schemes can include as few or as
          many colours as the designer sees fit. Each colour can be used for a variety of elements
          throughout the website, meaning the same colour may be used for different types of
          components.
        </p>
        <p>
          That being said, colour palettes are generally divided into two ot three sets of colours:
          primary, secondary or tertiary. The primary colours are generally the more dominant
          colours in the site, accounting for background colours, logo colours, menu colours, etc.,
          and secondary and tertiary colours are often used as accent colours, among other use
          cases. Very often, you’ll also see that a colour palette will include several shades and
          tints of the same colour, which gives the website a varied yet consistent feeling
          throughout its design.
        </p>
        <p>
          Consistency is actually one of the fundamental values in creating a colour scheme for your
          website. Because brand personality is so crucial to a successful website and business,
          having a consistent colour palette solidifies your brand identity, as your repeated use of
          colour and styling will create associations between your brand and your audience.
        </p>
        <h3>Why website colours are important</h3>
        <p>
          Website colours are predefined and restricted to keep consistency and ensure colours are
          matched to schemes that should include:
        </p>
        <h4>They present your visual identity</h4>
        <p>
          Your crucial choice of colour scheme becomes your visual identity, and it is how your
          brand will resonate in the minds of your visitors and prospective customers, otherwise
          known as brand recognition. This form of visual identity materializes into a communication
          medium between you and your target audience, as different user personas will be drawn to
          various types of color palettes. Colour schemes also visualize your brand messaging, which
          is why they influence a large part of your user experience.
        </p>
        <h4>They make a first impression</h4>
        <p>
          As web creators, we know that while we design (and redesign) our websites in the back of
          our mind, we are often thinking, even if subconsciously, “what kind first impression will
          this design make on my visitor?”. That’s one of the main things website colour schemes are
          about: first impressions. This is true to the extent that in one survey conducted in 2018,
          94% of respondents said that their first impressions of a website are design-related.
        </p>
        <h4>They create emotional connections</h4>
        <p>
          Finally, even if you don’t realize it at first, different colour palettes trigger
          different emotions and associations in the eye of the beholder. Depending on how you want
          to communicate with your audience and visitors, your choice of colours will play a strong
          role in the dynamic of your “conversation” and in shaping your voice and tone. The topic
          of color psychology is a world of its own, which we will soon discuss.
        </p>
        <h3>Choosing colours</h3>
        <p>
          The Primary, Secondary and Tertiary colour groups have been created build a style guide
          for style guide for colour usage. These colours have been expanded to include 3 shades and
          9 tints of the default colours.
        </p>
        <p>
          For help to create create shades and tints, use{' '}
          <a href="https://maketintsandshades.com">https://maketintsandshades.com</a>
        </p>
        <p>
          If using Figma, the{' '}
          <a href="https://www.figma.com/community/plugin/732603254453395948/Stark">
            https://www.figma.com/community/plugin/732603254453395948/Stark
          </a>{' '}
          plugin is a helpful tool to check{' '}
          <a href="https://webaim.org/resources/contrastchecker/">W3C colour requirements</a>.
        </p>
        <h3>Get to know the colour wheel</h3>
        <p>
          The fundamentals of colour theory begin with understanding the three groups that the
          colour wheel includes: primary, secondary, and tertiary. The primary colours, red, blue,
          and yellow, are the colour wheel's base colours, and all of the remaining colours are
          derived from these three. Next, come secondary colours. Secondary colours are what you get
          when you mix any of the three primary colours together, otherwise known as orange, green,
          and purple. Finally, there are tertiary colours, also referred to as “middle colours”.
          These are what you get when you combine a primary and a secondary colour. Examples of
          these are red-orange, yellow-green, or blue-purple.
        </p>
        <p>
          Understanding relationships between colours doesn't stop here. But now that we're aware of
          how colours are formed, we can define how they “interact” with each other, or in other
          words, how they work together, and how we build our own colour combinations.
        </p>
        <p>
          Ironically, although the types of relationships between colours on the colour wheel fall
          into concrete relationship “categories”, there are also many options for how these colours
          can combine with each other, and that's where colour combination-types come into play.
        </p>
        <ColorWheelSvg className="colorWheel" role="img" />
        <h3>Understand colour combinations</h3>
        <p>
          Just as each colour bears a personality and significance alone, the same is true for the
          relationships between each colour. When you choose a colour combination, you're often
          conveying a certain message or concept to your website visitor, depending on how the
          colour's “personalities” combine.
        </p>
        <p>
          If, for example, if you choose a complementary colour scheme that includes red and blue,
          red, which represents urgency and strength, and blue, which represents peace and loyalty,
          your end result is a blended atmosphere of strong, forthcoming loyalty and stability.
        </p>
        <p>
          Alternatively, if you choose two or more colours that strike a harmonious balance rather
          than a contrast, you are creating a completely different vibe. It's up to you as a web
          designer to decide which type of colour combination is a better fit for your website
        </p>
        <h3>Complementary colours: Opposites attract</h3>
        <p>
          Examples of complementary colours are red and green, blue and yellow, blue and orange, red
          and blue, among many others. What these pairs have in common are that they are two
          opposites of each other, and you can identify them by finding two colours that are
          directly opposite one another on the colour wheel. In practice, the significance of
          primary colour combinations in web design is that because a sharp contrast exists between
          them, they can make one colour, especially accent colours, stand out.
        </p>
        <p>
          In the context of website design, using complementary colours bears great value for
          elements such as buttons or navigation menus. When your objective is for visitors to
          notice a button and click it, using a complementary colour scheme as accent colours for
          your text and its background, is much more likely to grab user attention because of the
          stark contrast and differentiation between the two.
        </p>
        <p>
          Similarly, designing a button with a font colour that contrasts with the button's
          background color will make the button text a lot easier to see. This can often result in
          higher clickability and conversion rates, and the same is true for navigation menus and
          menu items.
        </p>
        <h3>Analogous colours: Side by side</h3>
        <p>
          Analogous colour schemes consist of three colors that are directly beside each other on
          the 12-spoke colour wheel. Web designers often choose analogous colour palettes when
          looking to create a modern yet sophisticated website. For example, an analogous colour
          scheme consisting of red, red-orange and light orange will emphasize the vibrant
          relationship between the red and light orange.
        </p>
        <h3>Triadic colors: Evenly spaced</h3>
        <p>
          Considered to be the most basic type of colour scheme, a triadic colour scheme is defined
          as any three colours located 120 degree from each other on the colour wheel. In some way,
          triadic schemes can be considered the most flexible of the three combination-types, as
          there are many directions you can go in to measure 120 degrees. Different to analogous,
          which is limited to three somewhat similar colours, or complementary colours, which can
          only be contrasting colors. Triadic can be seen as a mixture of the two, as triadic color
          schemes can combine both analogous and complementary colours, and there's (even) more room
          for creativity. As you can see, the options of colour combinations that a web designer can
          create truly are endless.
        </p>
        <h3>Consider colour psychology</h3>
        <h4>Warm colours</h4>
        <div className="colourPsychologyWrapper">
          <div className="colourPsychology pink">
            <p>Pink</p>
            <ul>
              <li>Compassion</li>
              <li>Sincerity</li>
              <li>Sophstication</li>
              <li>Sweet</li>
              <li>Soft</li>
              <li>Playful</li>
            </ul>
          </div>

          <div className="colourPsychology red">
            <p>Red</p>
            <ul>
              <li>Excitement</li>
              <li>Intensity</li>
              <li>Strength</li>
              <li>Love</li>
              <li>Energy</li>
              <li>Urgency</li>
            </ul>
          </div>

          <div className="colourPsychology orange">
            <p>Orange</p>
            <ul>
              <li>Confidence</li>
              <li>Success</li>
              <li>Bravery</li>
              <li>Sociability</li>
              <li>Friendly</li>
              <li>Warm</li>
            </ul>
          </div>

          <div className="colourPsychology yellow">
            <p>Yellow</p>
            <ul>
              <li>Creativity</li>
              <li>Trust</li>
              <li>Youthful</li>
              <li>Cheer</li>
              <li>Optimism</li>
              <li>Fresh</li>
            </ul>
          </div>
        </div>
        <p>
          These can have an energetic effect on the visitor, but when they are used alone they tend
          to over-stimulate. It is a good idea to mix them with cool and neutral colours for
          balance.
        </p>
        <h4>Cool colours</h4>
        <div className="colourPsychologyWrapper">
          <div className="colourPsychology green">
            <p>Green</p>
            <ul>
              <li>Nature</li>
              <li>Healing</li>
              <li>Relaxed</li>
              <li>Peace</li>
              <li>Freshness</li>
              <li>Quality</li>
            </ul>
          </div>

          <div className="colourPsychology blue">
            <p>Blue</p>
            <ul>
              <li>Comfort</li>
              <li>Trustppiness</li>
              <li>Calm</li>
              <li>Loyalty</li>
              <li>Competence</li>
              <li>Stability</li>
            </ul>
          </div>
          <div className="colourPsychology purple">
            <p>Purple</p>
            <ul>
              <li>Royalty</li>
              <li>Luxury</li>
              <li>Spitituality</li>
              <li>Ambition</li>
              <li>Wise</li>
              <li>Nostalgic</li>
            </ul>
          </div>
        </div>
        <p>
          These have a calming effect on the viewer, and that is why they are the most common
          colours used on websites. But be careful—if they are overused, they can also have a cold
          or impersonal feel.
        </p>
        <h4>Neutral colours</h4>
        <div className="colourPsychologyWrapper">
          <div className="colourPsychology brown">
            <p>Brown</p>
            <ul>
              <li>Friendships</li>
              <li>Dependable</li>
              <li>Rugged</li>
              <li>Trustworthy</li>
              <li>Simple</li>
            </ul>
          </div>
          <div className="colourPsychology black">
            <p>Black</p>
            <ul>
              <li>Formaility</li>
              <li>Dramatic</li>
              <li>Sophistication</li>
              <li>Security</li>
              <li>Reliable</li>
            </ul>
          </div>
          <div className="colourPsychology grey">
            <p>Grey</p>
            <ul>
              <li>Respect</li>
              <li>Wisdom</li>
              <li>Patience</li>
              <li>Modern</li>
              <li>Longevity</li>
              <li>Intelligent</li>
            </ul>
          </div>
          <div className="colourPsychology white">
            <p>White</p>
            <ul>
              <li>Clean</li>
              <li>Simplicity</li>
              <li>Innocence</li>
              <li>Honest</li>
              <li>Calm</li>
            </ul>
          </div>
        </div>
        <p>
          These are great to mix with warm or cool colours and they are often used to tone down
          primary colours and provide balance in web design.
        </p>
        <p>
          The world of{' '}
          <a href="https://99designs.com/blog/web-digital/web-design-colors/">colour psychology</a>{' '}
          is built on the idea that certain colours trigger specific feelings and emotions, which
          trigger certain courses of action. If you haven't encountered colour psychology until now,
          you're up for a true discovery.
        </p>
        <p>
          Colour psychology suggests that choosing your website color scheme based on the emotional
          experience you want to deliver to your users will not only impact your brand's
          personality, but it will trigger certain visitor reactions based on the emotional
          environment you create.
        </p>
        <p>
          Once we understand what each color is known to represent, choosing the most appropriate
          colour palette for our website becomes profoundly intuitive. For example, if you're
          building a website for your spa business, it makes sense to use colours that represent
          nature and healing, such as green, and possibly blue, which symbolizes peace and trust.
        </p>
        <p>
          With so many colour palette options that exist within the colour wheel, using color
          psychology as a guiding principle when choosing your colour scheme allows you to make more
          informed design decisions, and focus your theme and style in a way that suits your
          industry and business persona.
        </p>
        <h3>The 60-30-10 rule</h3>
        <p>
          This technique is simple but effective for mixing different colours. To create harmony,
          colours should generally be combined in the proportion of 60%—30%—10%. You don’t always
          have to go with three colours, but it is a good number to be safe and balanced. Using this
          method, 60% should be the dominant colour, 30% a secondary colour and 10% an accent
          colour. This proportion is pleasant to the human eye since it allows the visual elements
          to emerge gradually.
        </p>
        <h3>Keep responsive design in mind</h3>
        <p>
          The importance of responsive design is a rule of thumb for any web creator. But what may
          be less intuitive about how to make your website responsive, is that responsiveness goes
          beyond the sizing and layout of your site. Choice of colour palettes is also a strong
          contributor to how a website will look on mobile.
        </p>
        <p>
          In fact, keeping mobile responsive in mind when crafting your colour palette will often
          make your design process much easier. This way, you can guarantee that your text elements
          are equally legible regardless of screen size, and that icons and buttons are also just as
          visible on mobile as they are on desktop.
        </p>
        <p>
          Given how much smaller mobile screens are than desktop view, you may find that you’ll need
          to use fewer colors for mobile than you do for desktop. The smaller interface might look
          overwhelming if it has too many colours, yet the added space you have on desktop can
          handle a larger number of colours without seeming too busy.
        </p>
        <p>
          The choice of bold dark primary colour is engaging and visible on any screen. It is loud
          enough to make a small (mobile) screen fun and exciting, yet dark enough that on a desktop
          view it won’t be “too much.”
        </p>
        <p>
          A helpful way to ensure that you don’t have too many colors on your mobile UI, yet still
          obtain visual hierarchy and uniqueness, is to add multiple tints/shades of one colour to
          your colour scheme. The similarities between the colour tints/shades are similar enough
          that they’ll make the mobile interface look clean and cohesive, yet different enough to
          keep your website interactive and engaging.{' '}
        </p>
        <h3>Embrace neutral colours</h3>
        <p>
          Although they may be less exciting, neutral colours are a necessity for any
          correctly-crafted{' '}
          <a href="https://websitesetup.org/website-color-schemes/">colour scheme</a>. Even if you
          only use them for text elements, every professional colour palette should include neutral
          colours. As beautiful as non-neutral colours are, website visitors will, at one point or
          another, need a “break” from visual stimulation, especially when trying to process
          qualitative information through text.
        </p>
        <h3>Colour picker and comparison tool</h3>
        <ColorPickerColorful />
        <p>
          Use <a href="https://maketintsandshades.com">Tint & Shade Generator</a> for generating
          tints and shades of a colour.
        </p>
        <h3>Colour groups for this website</h3>
        <ul>
          <li>Page (Text colour)</li>
          <li>Primary</li>
          <li>Seconday</li>
          <li>Tertiary</li>
          <li>Accent</li>
          <li>Grey</li>
          <li>Cards</li>
          <li>Header</li>
          <li>Footer</li>
          <li>Alerts</li>
        </ul>

        {/* color - page */}
        <div className="colors">
          <h3>Page</h3>
          <p>Generally used to apply text colour.</p>
          <div className="swatchList">
            <ColorSwatch color={'page'} shadeCount={'3'} tintCount={'9'} />
          </div>
        </div>

        {/* color - primary */}
        <div className="colors">
          <h3>Primary</h3>
          <div className="swatchList">
            <ColorSwatch color={'primary'} shadeCount={'3'} tintCount={'9'} />
          </div>
        </div>

        {/* color - secondary */}
        <div className="colors">
          <h3>Secondary</h3>
          <div className="swatchList">
            <ColorSwatch color={'secondary'} shadeCount={'3'} tintCount={'9'} />
          </div>
        </div>

        {/* color - tertiary */}
        <div className="colors">
          <h3>Tertiary</h3>
          <div className="swatchList">
            <ColorSwatch color={'tertiary'} shadeCount={'3'} tintCount={'9'} />
          </div>
        </div>

        {/* color - accent*/}
        <div className="colors">
          <h3>Accent</h3>
          <div className="swatchList">
            <ColorSwatch color={'accent'} shadeCount={'3'} tintCount={'9'} />
          </div>
        </div>

        {/* color - grey */}
        <div className="colors">
          <h3>Grey</h3>
          <div className="swatchList">
            <ColorSwatch color={'grey'} shadeCount={'3'} tintCount={'9'} />
          </div>
        </div>

        {/* color - card */}
        <div className="colors">
          <h3>Card</h3>
          <div className="swatchList">
            <ColorSwatch color={'card'} tintCount={'9'} />
          </div>
        </div>

        {/* color - header */}
        <div className="colors">
          <h3>Header</h3>
          <div className="swatchList">
            <ColorSwatch color={'header'} shadeCount={'3'} tintCount={'9'} />
          </div>
        </div>

        {/* color - footer */}
        <div className="colors">
          <h3>Footer</h3>
          <div className="swatchList">
            <ColorSwatch color={'footer'} shadeCount={'3'} tintCount={'9'} />
          </div>
        </div>

        {/* color - Utils */}
        {/* <div className="colors">
          <h3>Focus visble</h3>
          <div className="swatchList">
            <ColorSwatch color={'focusVisible'} />
          </div>
        </div> */}

        {/* Alert colors */}
        <div className="colors">
          <h3>Alerts</h3>
          {/* color - tomato */}
          <h4>Alert default</h4>
          <div className="swatchList">
            <ColorSwatch color={'alert.tomato'} />
          </div>
        </div>

        {/* color - alert.l1 */}
        <div className="colors">
          <h4>Alert level 1</h4>
          <div className="swatchList">
            <ColorSwatch color={'alert.l1'} shadeCount={'3'} />
          </div>
        </div>

        {/* color - alert.l2 */}
        <div className="colors">
          <h4>Alert level 2</h4>
          <div className="swatchList">
            <ColorSwatch color={'alert.l2'} shadeCount={'3'} />
          </div>
        </div>

        {/* color - alert.l3 */}
        <div className="colors">
          <h4>Alert level 3</h4>
          <div className="swatchList">
            <ColorSwatch color={'alert.l3'} shadeCount={'3'} />
          </div>
        </div>

        {/* color - alert.l3 */}
        <div className="colors">
          <h4>Alert level 4</h4>
          <div className="swatchList">
            <ColorSwatch color={'alert.l4'} shadeCount={'3'} />
          </div>
        </div>

        {/* color - alert.l5 */}
        <div className="colors">
          <h4>Alert level 5</h4>
          <div className="swatchList">
            <ColorSwatch color={'alert.l5'} shadeCount={'3'} />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default StyleSection
