import React from 'react'
import { Helmet } from 'react-helmet'
// import SEOGeneral from '../../slices/seo/general.js'
// import SEOOpenGraph from '../../slices/seo/openGraph.js'
// import SEOTwitter from '../../slices/seo/twitter.js'

const MetaIndex = () => {
  return (
    <Helmet>
      <html lang="en-nz" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght,GRAD@8..144,100,0;8..144,200,0;8..144,300,0;8..144,400,14;8..144,500,0;8..144,600,0;8..144,700,0;8..144,800,0;8..144,900,0&display=swap"
        rel="stylesheet"
      />
      {/* <title>Meta title dddd</title> */}
      {/* {SEOGeneral}
      {SEOOpenGraph}
      {SEOTwitter} */}
      {/* <SEOGeneral />
      <SEOOpenGraph />
      <SEOTwitter /> */}
    </Helmet>
  )
}
export default MetaIndex
