const website = require('./website')

module.exports = {
  defaultPrefix: 'en',
  // All default paths  - Primary path (en) = '/' - include a trailing slash option for dev envrionemt.
  // For multi locale ....
  // allPrefix: ['mi/', 'en/'],
  // For single locale ....
  allPrefix: ['en/'],

  // English NZ
  'en-nz': {
    default: true,
    // Locales
    path: 'en',
    locale: 'en-nz',
    siteLanguage: 'en',
    // ogLang: 'de_DE',
    // defaultTitle: website.title,
    // defaultTitleAlt: website.titleAlt,
    // defaultDescription:
    //   'Basierend auf gatsby-starter-prismic mit Unterstützung für Lokalisierung (i18n)',
    // headline: 'Schreiben und Veröffentlichen für LekoArts',

    // Site title
    siteTitle: website.title,
    // Navigation
    linkToHomepage: 'Go to the homepage',
    menu: 'Menu',
    close: 'Close',
    back: 'Back',
    previous: 'Previous',
    next: 'Next',
    // Search
    searchPlacholder: 'Type to filter results...',
    // Sorting
    sortBy: 'Sort by',
    sortByDate: 'Date',
    sortByLocation: 'Location',
    sortByTitle: 'Title',
    sortByType: 'Type',
    // Location
    covers: 'Covers',
    contact: 'Contact',
    // Moment times
    starts: ' Starts',
    ends: 'Ends',
    duration: 'Duration',
    day: 'Day',
    days: 'Days',
    hour: 'Hour',
    hours: 'Hours',
    minute: 'Minute',
    minutes: 'Minutes',
    // Events
    previousEvent: 'Previous event',
    attendingEvent: 'Planning on attending this event? Let us know.',
  },

  // Te Reo - Maori NZ
  'mi-nz': {
    // Locales
    path: 'mi',
    locale: 'mi-nz',
    siteLanguage: 'mi',
    // Site title
    siteTitle: 'Taku Ao Taku Reo',
    // Navigation
    linkToHomepage: 'Haere ki te whaarangi',
    menu: 'Tahua',
    close: 'Katia',
    back: 'Hoki',
    previous: 'Tuhinga o mua',
    next: 'Panuku',
    // Search
    searchPlacholder: 'Patohia hei taatari i nga kitenga ...',
    // Sorting
    sortBy: 'Kōmakahia e',
    sortByDate: 'Te Ra',
    sortByLocation: 'Tauwāhi',
    sortByTitle: 'Taitara',
    sortByType: 'Momo',
    // Location
    covers: 'Nga uhi',
    contact: 'Whakapaa',
    // Moment times
    starts: ' Ka tiimata',
    ends: 'Mutu',
    duration: 'Roanga',
    day: 'Ra',
    days: 'Ra',
    hour: 'Haora',
    hours: 'Haora',
    minute: 'Minute',
    minutes: 'Miniti',
    // Events
    previousEvent: 'Tuhinga o mua',
    attendingEvent: 'Te whakamahere mo te haere ki tenei huihuinga? Kia mohio taatau.',
  },
}
