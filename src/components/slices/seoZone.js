import React from 'react'
// import { Helmet } from 'react-helmet'
import SEOGeneral from './seo/general.js'
import SEOOpenGraph from './seo/openGraph.js'
import SEOTwitter from './seo/twitter.js'

const SeoZone = ({ currentLang, seoZone }) => {
  const sliceComponents = {
    general_seo_card: SEOGeneral,
    open_graph: SEOOpenGraph,
    twitter_card: SEOTwitter,
  }

  if (seoZone) {
    const sliceZoneContent = seoZone.map((slice, index) => {
      const SliceComponent = sliceComponents[slice.slice_type]
      if (SliceComponent) {
        return <SliceComponent slice={slice} key={`slice-${index}`} />
      }
      return null
    })

    return <>{sliceZoneContent}</>
  }
}

export default SeoZone
