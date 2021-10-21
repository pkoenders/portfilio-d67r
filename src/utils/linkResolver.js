// If we are using locales, get the i18n config file
// const i18n = require('../../config/i18n')

// -- The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

const linkResolver = (doc) => {
  // console.log('doc.type = ' + doc.type)
  // console.log('doc.lang = ' + doc.lang)

  // For locales ...
  // const prefix = i18n[doc.lang].default ? `/` : `/${i18n[doc.lang].path}/`
  // For single locale ...
  const prefix = '/'

  // URL for a gallery_page type
  if (doc.type === 'gallery_page') {
    return `${prefix}portfolio`
  }
  // URL for a gallery_item type
  if (doc.type === 'gallery_item') {
    return `${prefix}portfolio/${doc.uid}`
  }

  // URL for a blog_list type
  if (doc.type === 'blog_list') {
    return `${prefix}thoughts`
  }
  // URL for a blog_post type
  if (doc.type === 'blog_post') {
    return `${prefix}thoughts/${doc.uid}`
  }

  // URL for a homepage type
  if (doc.type === 'homepage') {
    return `${prefix}`
  }

  // URL for a page type
  if (doc.type === 'general_page') {
    return `${prefix}${doc.uid}`
  }

  // Backup for all other types
  return `${prefix}`
}
module.exports = linkResolver
