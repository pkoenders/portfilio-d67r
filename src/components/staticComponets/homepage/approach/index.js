import React from 'react'

// Page components
import Button from '/src/components/common/buttons/linkButton'
import Icon from '/src/components/common/icons/material'

import styled from 'styled-components'

const ApproachSection = styled.section`
  padding: ${({ theme }) => theme.padding.default} ${({ theme }) => theme.padding['1/2']};
  display: flex;
  .intro {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;

    div {
      padding: ${({ theme }) => theme.padding['1/2']} 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      grid-gap: ${({ theme }) => theme.padding['1/2']};
      > i {
        font-size: 40px;
        /* background-image: radial-gradient(
          circle,
          rgba(95, 205, 153, 1) 0%,
          rgba(95, 205, 153, 0) 75%
        );
        background-size: 100%;
        background-repeat: repeat;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent; */
        color: ${({ theme }) => theme.colors.tertiary[1200]};
        /* opacity: 0.75; */
        margin-top: -${({ theme }) => theme.padding['1/8']};
        /* box-shadow: ${({ theme }) => theme.boxShadow.default}; */
      }

      span {
        width: 100%;
        h4 {
          /* font-weight: 500;
          margin-bottom: 0.1em; */
          margin-bottom: 0.2em;
        }

        /* p:first-of-type {
          font-weight: 600;
          margin-bottom: 0.3em;
        } */
        p,
        ul,
        li {
          text-align: left;

          /* .emoji::before {
            letter-spacing: 0.01em;
            padding-left: 0.25em;
          }
          .emoji.heart::before {
            content: '❤️';
          } */
        }
        span {
          margin-top: ${({ theme }) => theme.padding['1/4']};
          a {
            margin: 0 auto 0 0;
          }
        }
      }
    }
  }
`

const Approch = () => {
  return (
    <ApproachSection className="section-layout slim" aria-label="Approach">
      <div>
        <article className="intro">
          <div>
            <Icon icon={'speed'} />
            <span>
              <h4>Performance</h4>
              <p>
                I design and build websites that use; next-generation image formats and
                optimisation, styled-components, lazy-loading, prefetching resources, and more to
                improve your website's performance and page loading speed.
              </p>
              <p>
                <a href="https://internetretailing.net/mobile-theme/mobile-theme/majority-of-websites-currently-fail-to-meet-googles-core-web-vitals-user-experience-requirements-23050">
                  Only 4% of websites
                </a>{' '}
                meet Google's Core Web Vitals. Does your website meet the Core Web Vitals? More
                importantly, has your website provider talked to you about their strategy on how
                they plan to meet the Core Web Vitals? As of June 2021, Google will consider{' '}
                <a href="https://developers.google.com/search/blog/2020/11/timing-for-page-experience">
                  “Page Experience”
                </a>{' '}
                as part of search ranking, measured by a set of Core Web Vitals metrics.
              </p>
              <p>
                An optimised website that loads quickly helps achieve the Core Web Vitals and
                contributes to a better user experience and positive page rankings.
              </p>
            </span>
          </div>

          {/* <div>
          <Icon icon={'hub'} />
          <span>
            <p>Integrations</p>
            <p>
              Sourcing content, transform data, and more. Almost anything you can imagine — from
              CMS's, spreadsheets, to e-commerce — I can offer a seamless integration of services.
            </p>
          </span>
        </div> */}

          <div>
            <Icon icon={'accessibility_new'} />
            <span>
              <h4>Accessibility</h4>
              <p>
                I have an interest in and support digital accessibility. Accessibility does not
                happen by accident. It has to be purposefully planned, built, and tested.
                Inaccessible websites deprive users with disabilities of experiences and
                opportunities that other people take for granted.{' '}
                <a href="https://www.stats.govt.nz/news/one-in-four-new-zealanders-identified-as-disabled">
                  24% of New Zealanders
                </a>{' '}
                identify themselves as having a disability. It does not make sense to ignore these
                users. An accessible website is inclusive. Is your website accessible?
              </p>

              <p>
                <a href="https://webaim.org/">WebAIM</a> recognises the framework I use as the most
                accessible web framework with built-in best practices like accessible routing,
                progressive page enhancement and a built-in linting tool to find accessibility
                errors. Help make the web work for everyone.
              </p>
            </span>
          </div>

          <div>
            <Icon icon={'preview'} />
            <span>
              <h4>Content &amp; Previews</h4>
              <p>
                2021 offers a wide range of content systems.{' '}
                <a href="https://www.datocms.com">DatoCMS</a>,{' '}
                <a href="https://www.sanity.io/">Sanity</a>,{' '}
                <a href="https://wordpress.com">WordPress</a>,{' '}
                <a href="https://www.contentful.com">Contentful</a>, and{' '}
                <a href="https://agilitycms.com">Agility</a> are tools I have worked with in the
                past.
              </p>

              <p>
                I have created a <a href="/prismic-template">demonstration template</a> of what
                Prismic can accomplish with just one manageable and straightforward template. This
                website is utilising <a href="https://prismic.io/">Prismic CMS</a> to manage
                content. Prismic is cost-effective and has a great user onboarding and experience
                for content creators, designers and developers. Prismic empowers content creators to
                develop and publish websites without constraints in locales of their choice. Create
                a schedule for releases, preview and share your content changes.
              </p>
              <p>
                Don't let your website design and content to drift into restrictive and
                uncompromising templates. Build and publish what and when you want to.
              </p>

              <Button
                buttonLabel={'Demonstration template'}
                buttonType={'Static'}
                buttonLink={'/prismic-template'}
                buttonStyle={'primary'}
                // buttonIcon={'article'}
                // buttonIconAlign={'right'}
              />
            </span>
          </div>

          <div>
            <Icon icon={'security'} />
            <span>
              <h4>Security</h4>
              <p>
                I use <a href="https://reactjs.org/">React</a> to generate static HTML at build
                time. No server and no reachable database equals no malicious requests, DDOS attacks
                or accidental exposure. Your website attack surface will be low to non-existent.
              </p>
            </span>
          </div>

          <div>
            <Icon icon={'savings'} />
            <span>
              <h4>Cost</h4>
              <p>
                I design and develop websites for a global CDN that don't require complex scaling
                operations or expensive hosting plans. They scale when needed, but when traffic
                drops, so does your usage — and your costs. Host your website for less (cheaper than
                Wix, WordPress and Squarespace) and use less energy. If you plan to administer your
                website on your own and have a low traffic, you could be hosting for free. It's a
                more brilliant choice for those considering responsible hosting with lower costs and
                carbon footprint!
              </p>
            </span>
          </div>

          <div>
            <Icon icon={'support'} />
            <span>
              <h4>Support</h4>
              <p>
                In my hands, your website will be blazingly fast, accessible, secure and customised.
                You will get personal support, and I respond to requests because I simply 🧡 what I
                do.
              </p>
              <Button
                buttonLabel={'Reach out'}
                buttonType={'Static'}
                buttonLink={'/contact'}
                buttonStyle={'primary'}
                buttonIcon={'send'}
                buttonIconAlign={'right'}
              />
            </span>
          </div>
        </article>
      </div>
    </ApproachSection>
  )
}

export default Approch
