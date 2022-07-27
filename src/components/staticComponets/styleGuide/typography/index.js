import React from 'react'

// Layout
import FontType from './fontType'
import styled from 'styled-components'

const Section = styled.section`
  > div {
    .comicSans {
      font-family: 'Comic Sans MS', 'Comic Sans';
    }
    .gillSans {
      font-family: 'Gill Sans', 'Gill Sans MT';
    }
    .arial {
      font-family: Arial;
    }
    .openSans {
      font-family: 'Open Sans';
    }
    .addTypeBlur {
      color: transparent;
      text-shadow: 0 0 0px #000;
      &.x2 {
        text-shadow: 0 0 2px #000;
      }
      &.x4 {
        text-shadow: 0 0 4px #000;
      }
      &.x6 {
        text-shadow: 0 0 px #6000;
      }
    }

    .subHeading {
      text-align: left;
      align-self: flex-start;
      font-weight: 500;
      padding: ${({ theme }) => theme.padding['1/2']} 0;
    }

    .typographyStyles {
      display: flex;
      margin-top: ${({ theme }) => theme.margin.default};
      flex-direction: column;
      /* grid-gap: ${({ theme }) => theme.padding['1/4']}; */
    }
  }
`
const StyleSection = ({ spyID }) => {
  return (
    <Section id={spyID}>
      <div>
        <h2>Typography</h2>
        <p className="">
          Typefaces are selected and preloaded from the Google Font library along with icons from
          Material Icons. For consistency, avoid applying a bold style to heading typefaces.
        </p>
        <p>
          Go to <a href="https://type-scale.com">https://type-scale.com/</a> to generate typefaces
          sizes. The scale for this website is (1.250) Major Third with the base font set to 16px
          for this project.
        </p>

        <p>These are the typographic styles for this website.</p>
        <div className="typographyStyles">
          <FontType fontType={'h1'} />
          <FontType fontType={'h2'} />
          <FontType fontType={'h3'} />
          <FontType fontType={'h4'} />
          <FontType fontType={'h5'} />
          <FontType fontType={'h6'} />
          <FontType fontType={'p'} fontBase={true} />
          <FontType fontType={'serif'} />
          <FontType fontType={'mono'} />
        </div>
        <h3>Typeface vs. font. Whats the difference? and does it matter?</h3>
        <p>
          A typeface is the same thing as a font, right? Not exactly. Although the words are often
          used interchangeably, there's a difference between a typeface vs. font. And it's a nuanced
          difference that can sometimes be confusing.
        </p>
        <p>
          It does matter, understanding the difference and using the terms effectively help everyone
          understand the dicussions of typefaces and fonts and avoid confusion.
        </p>
        <ul>
          <li>
            A <strong>typeface</strong> is a set of design features for letters and other
            characters.
          </li>
          <li>
            A <strong>font</strong> is the variation in weight and size of a typeface.
          </li>
          <li>
            A <strong>font family</strong> is a group of related fonts.
          </li>
        </ul>

        <h3>A Guide to understanding what makes a typeface accessible</h3>
        <p>
          When selecting a typeface/font for use in a website or an app, test readability and
          legibility in comparison with other candidates. The characteristics in the following
          recommendations provide a starting point for discussion and expert review. However these,
          like all accessibility guidelines, are of technical nature, whereas usability and
          effectiveness can only be measured by testing with a broad range of people with and
          without impairments or disabilities. Recommended conditions to be focused on with the user
          group are people with Dyslexia as well as Moderate to Severe Vision Impairment, Aphasia
          and Adult Learning Disabilities.
        </p>
        <p>
          Testing is recommended to be done in isolation as well as in situ to ensure that the
          combination of typeface/font, along with it’s design application, does not negatively
          impact your reading audience, and that the choice is based on a performant typeface as
          well as typography. This can be approached in a number of ways and function should be
          measured in combination of preference and performance.
        </p>
        <h3>A typeface needs to meet the Emotional, Functional and Technical criteria</h3>
        <ul>
          <li>Emotional - Do we like the typeface</li>
          <li>Functional - Legible and Readable</li>
          <li>
            Technically accessible - As software, will it work across languages and digital systems
          </li>
        </ul>
        <h3>Characteristics to consider</h3>
        <ul>
          <li>Consider a Humanist typeface over Grotesque</li>
          <li>A typeface that will cater for multilingual charactors</li>
          <li>Choose a taller and consistent 'x-height'</li>
          <li>
            Choose a more open typeface with a larger apertures and counter spaces - increased air
            between the spaces
          </li>
          <li>
            Avoid characters that align to the descender that cause line spacing, or “leading”
            issues
          </li>
          <li>Avoid ligatures and joined letters</li>
          <li>Check for imposter letters and ensure letters are recognisable</li>
          <li>Avoid or limit using ALL CAPS (all caps can trip screen readers)</li>
          <li>
            Open source typefaces will save money on licenses that charge by page or unique view, by
            app and broadcasting usage
          </li>
          <li>
            Popular open source typefaces may be chached and load quickly by the user contributing
            to faster page load and avoiding a slow or failing First Contentful Paint (FCP) score
          </li>
        </ul>
        <h3>1. Use a typeface that is Appropriate to your Audience and the Organisation's Brand</h3>
        <p>
          For Children or Adults who are learning to read or have a low reading ability, the less
          complex shapes of sans serif typefaces can help with character recognition. Serif style
          typefaces can enable more fluid readability for advanced readers due to the additional
          disambiguated letter shaping. Serifs form word shapes to enable more fluid readability
          however sans serif can aid individual character recognition for less advanced readers.
        </p>
        <p>
          Longer reading experiences can benefit from serifs which enable better saccadic flow of
          reading, reducing user fatigue and increasing reading speeds and comprehension.
        </p>
        <p>
          For the youngest readers, adults with low literacy or for people with more profound
          recognise than its double storey variant.
        </p>
        <p className="largeParaText x48 comicSans">COMIC SANS</p>
        <p>
          This and the more casual visual style in Comic Sans is popular with organisations that
          focus on communicating with children or about children. This choice however can undermine
          an organisation where the tone should be more formal or fashionable, and undermine the
          organisation's brand integrity.
        </p>
        <p>
          For advanced readers a single storey 'a' can be a distraction to the smooth reading
          experience because of its similarity to other letter shapes such as 'o' or 'c', or 'd'
          even. Once learned, a double storey 'a' provides a better differentiation and aids reading
          flow.
        </p>
        <p>
          As children develop their reading ability develops. They start by learning the individual
          character shapes and associated sounds, then they move to recognising groupings, full
          words and eventually move to reading in saccades. During a saccade the eye/brain fixates
          on a single character picking up two to three characters to the left and three to four
          characters to the right, and eventually jumps to the next fixation point, approx. seven
          characters ahead. Please be mindful of your intended audience as not everyone may have
          acquired the same proficiency levels of saccadic reading.
        </p>
        <p>
          In some instances typeface/font accessibility might be treated as an 'alternative' the
          user can switch to or as with BBC Reith, there are additional characters or font
          variations so the default can be optimised for children or display in difficult contexts
          such as a condensed version for data tables.
        </p>
        <h3>2. Letters should be Easily Distinguishable from one another</h3>
        <p>
          For people with moderate to more severe vision impairment the characters o, c, e or a can
          be easily confused, which in turn makes words harder to identify.
        </p>
        <p>
          If the shapes are too closed, or their counters are too small, then they can begin to look
          very similar. Typefaces with tight apertures can cause the counter to appear fully closed
          to many readers with moderate to severe vision impairment or lower reading ability.
          Conversely more open counters within the letterforms themselves can increase legibility by
          better emphasising the unique shape, and are therefore preferable.
        </p>
        <p>
          <span className="largeParaText x32">clear / dear</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">clear / dear</span>
        </p>
        <p>
          <span className="largeParaText x32">turn / tum</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">turn / tum</span>
        </p>
        <p>
          <span className="largeParaText x32">CS5 / CSS</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">CS5 / CSS</span>
        </p>
        <p>
          <span className="largeParaText x32">105 / IOS</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">105 / IOS</span>
        </p>
        <p>
          <span className="largeParaText x32">5AM / SAM</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">5AM / SAM</span>
        </p>
        <p>
          <span className="largeParaText x32">Z2 / 22</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">Z2 / 22</span>
        </p>
        <p>
          <span className="largeParaText x32">LJ, LI, Li / U</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">LJ, LI, Li / U</span>
        </p>
        <p>
          <span className="largeParaText x32">ce / oe</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">ce / oe</span>
        </p>
        <p>
          <span className="largeParaText x32">i / j</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">i / j</span>
        </p>
        <p>
          <span className="largeParaText x32">B / 8</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">B / 8</span>
        </p>
        <p>
          <span className="largeParaText x32">D / O</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">D / O</span>
        </p>
        <p>
          <span className="largeParaText x32">turn / tum</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">turn / tum</span>
        </p>
        <p>
          <span className="largeParaText x32">0 / o</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">0 / o</span>
        </p>
        <p>
          <span className="largeParaText x32">k / R</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">k / R</span>
        </p>
        <p>
          <span className="largeParaText x32">a / o</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">a / o</span>
        </p>
        <p>
          <span className="largeParaText x32">r / v / Y</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">r / v / Y</span>
        </p>
        <p>
          <span className="largeParaText x32">g / q</span>
          <br />
          <span className="largeParaText x16 addTypeBlur x2">g / q</span>
        </p>
        <h3>3. There should be a Visible Difference Between Capital Height and Ascenders</h3>
        <p className="largeParaText x48">Illustrate</p>
        <h3>4. Ensure the Typeface has Adequate Letter Spacing</h3>
        <p>
          The tighter the letter spacing is the less people with even mild vision impairments are
          able to identify the individual characters. Letters can become adjoined such as “ol”, “lo”
          or “vv”, or simply make the individual letter shapes within tight groupings harder to
          decode. Tight letter spacing is also causes reduced readability for people with good
          vision and reading proficiency.
        </p>
        <p>
          In particular people with vision impairment, reading difficulties or cognitive
          disabilities struggle with tight letter spacing as it creates visual crowding which can
          make the job of focusing on and recognising an individual character difficult. Adjusting
          the letter-spacing with CSS.
        </p>
        <p>
          Any adjustments should be tested across the Typeface in context. Fallback fonts will
          inherit typogrgaphic adjustments.
          <br />
          <span className="largeParaText x48">lollipop</span>
        </p>
        <h3>5. Ensure there is no Mirroring</h3>
        <p>
          All sighted young children horizontally flip letters as part of their early neurological
          development. At around the age of six years old, however, this neurological trait resolves
          itself as part of ongoing physiological development, however in some children this
          development stage doesn’t occur and accordingly letter flipping effect is lifelong. In
          extremely rare occasions the mirroring effect may also be re-introduced because of brain
          trauma. As such d and b, or q and p, should be obviously unique in shape and have no
          ambiguous characteristics.
          <br />
          <span className="largeParaText x48">db / qp</span>
        </p>
        <h3>
          6. Avoid Imposter Letter Shapes that are Designed to be Very Similar to Other Letter
          Shapes
        </h3>
        <p>
          Some typefaces have letterform designs that are virtually identical for multiple letters.
          The letters “I1l” (upper case 'i', the number one and lower case L in Gill Sans) are a
          good example of this issue
          <br />
          <span className="gillSans largeParaText x48">I 1 l</span>
          <br />
          <span className="largeParaText x48">I 1 l</span>
        </p>
        <p>
          To avoid this problem choose a typeface or font with distinct features on both the top
          and/or the bottom of the capital 'I' and a short but noticeable arm on the top of the
          number '1'.
          <br />
        </p>
        <h3>7. Avoid Ligatures or Joined Letters</h3>
        <p>
          To avoid this problem choose a typeface or font that don't merge letters 'ff', 'fh',
          'ffl', 'ffi'.
          <br />
          <span className="largeParaText x48">office, halfhearted, waffle,</span>
        </p>
        <h3>
          8. Humanist Typefaces are Generally More Legible at Smaller Sizes than Grotesque Typefaces
        </h3>
        <p>
          Humanist typefaces tend to have more varied character widths. This aids with disambiguated
          letter shaping, and thus aids in particular with quick and accurate letter recognition.
          Varied character widths aid character recognition for people with all types of eye
          condition or learning disabilities.
          <br />
          <span className="openSans largeParaText x48">Open Sans is a humanist typeface</span>
          <br />
          <span className="arial largeParaText x48">Arial is a grotesque typeface</span>
        </p>
        <h3>9. Macrons</h3>
        <p>
          A macron is a diacritical mark: it is a straight bar placed above a letter, usually a
          vowel. Its name derives from Ancient Greek μακρόν "long", since it was originally used to
          mark long or heavy syllables in Greco-Roman metrics. It now more often marks a long vowel.
          ā, ē, ī, ō, ū, Ā, Ē, Ī, Ō and Ū.
        </p>
        <p>
          Some typefaces and their font families families have support for macrons and others don't.
          If you are developing a web site or going through a rebranding exercise, make macron
          support a mandatory requirement of the project before you start.
        </p>
        <p>The Māori word for macron is tohutō (or pōtae - hat).</p>
        <h4>Typing Macrons</h4>
        <p>
          Easily enter a macronised vowel by pressing ` (the key with ~ tilde on it) and then the
          vowel.
          <br />
          <span className="largeParaText x32">`a = ā</span>
        </p>
        <p>
          To enter a macronised capital vowel, press `, then hold down shift and press the vowel,
          e.g.,
          <br />
          <span className="largeParaText x32">`A = Ā</span>
          <br />
          <span className="largeParaText x32">ā, ē, ī, ō, ū, Ā, Ē, Ī, Ō and Ū.</span>
        </p>
        <h3>10. Test the Suitability of any Typeface/Font in Context</h3>
        <p>
          When selecting a typeface/font for use in a website or an app, test readability and
          legibility in comparison with other candidates. The characteristics in recommendations 1
          to 9 provide a starting point for discussion and expert review. However these, like all
          accessibility guidelines, are of technical nature, whereas usability and effectiveness can
          only be measured by testing with a broad range of people with and without impairments or
          disabilities. Recommended conditions to be focused on with the user group are people with
          Dyslexia as well as Moderate to Severe Vision Impairment, Aphasia and Adult Learning
          Disabilities.
        </p>
        <p>
          Testing is recommended to be done in isolation as well as in situ to ensure that the
          combination of typeface/font, along with it’s design application, does not negatively
          impact your reading audience, and that the choice is based on a performant typeface as
          well as typography. This can be approached in a number of ways and function should be
          measured in combination of preference and performance.
        </p>
        <h3>Accessible typograpghy tips and references</h3>
        <ul>
          <li>
            <a href="https://medium.com/the-readability-group/a-guide-to-understanding-what-makes-a-typeface-accessible-and-how-to-make-informed-decisions-9e5c0b9040a0">
              https://medium.com/the-readability-group/a-guide-to-understanding-what-makes-a-typeface-accessible-and-how-to-make-informed-decisions-9e5c0b9040a0
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/watch?v=h8IOqUl1zII">
              https://www.youtube.com/watch?v=h8IOqUl1zII
            </a>
          </li>

          <li>
            <a href="https://www.bbc.co.uk/gel/articles/introducing-bbc-reith">
              https://www.bbc.co.uk/gel/articles/introducing-bbc-reith
            </a>
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default StyleSection
