let Components = {}

// Homepage intro
Components['HomepageIntro'] = require('/src/components/staticComponets/homepage/intro/').default

// Homepage approach
Components['HomepageApproach'] =
  require('/src/components/staticComponets/homepage/approach/').default

// Style guide
Components['Styleguide'] = require('/src/components/staticComponets/styleGuide/').default

// Lghthouse scores table
Components['LighthouseScores'] =
  require('/src/components/staticComponets/tables/lighthouseScores/').default

export default Components
