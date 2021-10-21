const _ = require('lodash')
const locales = require('./config/i18n')
const {
  replaceTrailing,
  localizedSlug,
  replaceBoth,
  wrapper,
} = require('./src/utils/gatsby-node-helpers')

// Take the pages from src/pages and generate pages for all locales, e.g. /index and /en/index
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Only create one 404 page at /404.html
  if (page.path.includes('404' || 'preview')) {
    return
  }

  if (page.path.includes('preview')) {
    return
  }

  // First delete the pages so we can re-create them
  deletePage(page)

  Object.keys(locales).map((lang) => {
    // Remove the trailing slash from the path, e.g. --> /categories
    page.path = replaceTrailing(page.path)

    // Remove the leading AND traling slash from path, e.g. --> categories
    const name = replaceBoth(page.path)

    // Create the "slugs" for the pages. Unless default language, add prefix àla "/en"
    const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Remove trailing slash from page.path (e.g. "/mi/")
      path: localizedPath,
      // Pass in the locale as context to every page
      context: {
        locale: lang,
        name,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      {
        indexPage: allPrismicHomepage {
          edges {
            node {
              id
              uid
              lang
              type
            }
          }
        }

        generalPage: allPrismicGeneralPage {
          edges {
            node {
              id
              uid
              lang
              type
            }
          }
        }

        galleryList: allPrismicGalleryPage {
          edges {
            node {
              id
              uid
              lang
              type
            }
          }
        }

        galleryPage: allPrismicGalleryItem(
          sort: { order: [ASC, DESC], fields: [lang, data___creation_date] }
        ) {
          edges {
            node {
              id
              uid
              lang
              type
            }
            next {
              uid
              lang
              type
              data {
                title {
                  text
                }
              }
            }
            previous {
              uid
              lang
              type
              data {
                title {
                  text
                }
              }
            }
          }
        }

        blogList: allPrismicBlogList {
          edges {
            node {
              id
              uid
              lang
              type
            }
          }
        }

        blogPost: allPrismicBlogPost(
          sort: { order: [ASC, DESC], fields: [lang, data___release_date] }
        ) {
          edges {
            node {
              id
              uid
              lang
              type
            }
            next {
              uid
              lang
              type
              data {
                title {
                  text
                }
              }
            }
            previous {
              uid
              lang
              type
              data {
                title {
                  text
                }
              }
            }
          }
        }
      }
    `)
  )

  // General page
  const generalPageTemplate = require.resolve('./src/templates/generalPage.js')
  const generalPageList = result.data.generalPage.edges
  generalPageList.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: localizedSlug(edge.node),
      component: generalPageTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
        locale: edge.node.lang,
      },
    })
  })

  // Gallery List page
  const galleryListTemplate = require.resolve('./src/templates/galleryList.js')
  const galleryListPage = result.data.galleryList.edges
  galleryListPage.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: localizedSlug(edge.node),
      component: galleryListTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
        locale: edge.node.lang,
      },
    })
  })

  // Gallery item
  const galleryPageTemplate = require.resolve('./src/templates/galleryPage')
  const galleryPage = result.data.galleryPage.edges
  galleryPage.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!

    const galleryPageList = edge.node.uid
    const { lang } = edge.node

    const localizedPath = locales[lang].default
      ? `/portfolio/${_.kebabCase(galleryPageList)}`
      : `/${locales[lang].path}/portfolio/${_.kebabCase(galleryPageList)}`
    createPage({
      path: localizedPath,
      component: galleryPageTemplate,

      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
        locale: edge.node.lang,
        next: edge.next,
        previous: edge.previous,
      },
    })
  })

  // Blog List page
  const blogListTemplate = require.resolve('./src/templates/blogList.js')
  const blogListPage = result.data.blogList.edges
  blogListPage.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: localizedSlug(edge.node),
      component: blogListTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
        locale: edge.node.lang,
      },
    })
  })

  // Blog post
  const blogPostTemplate = require.resolve('./src/templates/blogPost')
  const blogPost = result.data.blogPost.edges
  blogPost.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!

    const blogPostList = edge.node.uid
    const { lang } = edge.node

    const localizedPath = locales[lang].default
      ? `/thoughts/${_.kebabCase(blogPostList)}`
      : `/${locales[lang].path}/thoughts/${_.kebabCase(blogPostList)}`
    createPage({
      path: localizedPath,
      component: blogPostTemplate,

      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
        locale: edge.node.lang,
        next: edge.next,
        previous: edge.previous,
      },
    })
  })
}
