require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const linkResolver = require('./src/utils/linkResolver')

module.exports = {
  siteMetadata: {
    title: `Website Design - Palmerston North`,
    description: `Web Designer - Palmerston North`,
    siteUrl: 'https://d67r.app', // No trailing slash allowed!
    defaultImage: '/static/android-chrome-512x512.png', // Path to your image you placed in the 'static' folder
    logo: '/static/android-chrome-512x512.png', // Used for SEO
    author: 'Peter Koenders',
    year: '2022',
  },

  flags: {
    // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    // FAST_DEV: true,
    DEV_SSR: false,
  },

  plugins: [
    `babel-plugin-styled-components`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        // releaseID: `${process.env.PRISMIC_RELEASE_ID}`,
        // prismicToolbar: true,
        linkResolver: () => (doc) => linkResolver(doc),
        // defaultLanguage: 'en-nz',
        // langs: ['en-nz', 'mi-nz'],

        schemas: {
          homepage: require('./custom_types/homepage.json'),
          general_page: require('./custom_types/general_page.json'),

          gallery_item: require('./custom_types/gallery_item.json'),
          gallery_page: require('./custom_types/gallery_page.json'),

          blog_post: require('./custom_types/blog_post.json'),
          blog_list: require('./custom_types/blog_list.json'),

          forms: require('./custom_types/forms.json'),
          shared_content: require('./custom_types/shared_content.json'),
          main_navigation: require('./custom_types/main_navigation.json'),
        },

        // add prismic toolbar
        // prismicToolbar: true,
      },
    },

    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        toolbar: 'new',
      },
    },

    // {
    //   resolve: `gatsby-styled-components-dark-mode`,
    //   options: {
    //     light: require(`./src/themes/default/pkoenders.js`),
    //     dark: require(`./src/themes/default/pkoenders-dark.js`),
    //   },
    // },

    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: '1a7PMAUOZWEjzpDxUhCzUqJTkz6BBl9NuMGrUEJBbw7Y',

        // The `spreadsheetName` is recommended, but optional
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // If you are sourcing multiple sheets, you can set this to distringuish between the source data
        // spreadsheetName: 'Lighthouse Scores',

        // The `typePrefix` is optional, default value is "GoogleSpreadsheet"
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // It can be overridden to fully customize the root query
        // typePrefix: 'GoogleSpreadsheet',

        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        // {
        //   client_email: "<your service account email address>",
        //   private_key: "<the prive key for your service account>"
        // }
        //
        // Refer to googles own documentation to retrieve the credentials for your service account:
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        //
        // When you have generated your credentials, it's easiest to refer to them from an environment variable
        // and parse it directly:
        // credentials: JSON.parse(GOOGLE_SERVICE_ACCOUNT_CREDENTIALS),,

        credentials: {
          type: 'service_account',
          project_id: `${process.env.PROJECT_ID}`,
          private_key_id: `${process.env.PRIVATE_KEY_ID}`,
          private_key: `${process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n')}`,
          client_email: `${process.env.CLIENT_EMAIL}`,
          client_id: '',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
        },

        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,

        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: (node) => node,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },

    'gatsby-plugin-gatsby-cloud',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,

    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TNBTNLW',
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },

    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://d67r.app',
        sitemap: 'https://d67r.app/sitemap/sitemap-index.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Website Design - Palmerston North`,
        description: `Website Design - Palmerston North`,
        short_name: `Website Design`,
        start_url: `/`,
        background_color: `#091b38`,
        theme_color: `#091b38`,
        lang: `en-nz`,
        display: `standalone`,
        icon: `static/manifest.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },

    `gatsby-plugin-offline`,
  ],
}
