import React from 'react'
import { Helmet } from 'react-helmet'
import General from './general.js'
import OpenGraph from './openGraph.js'
import Twitter from './twitter.js'

const SEOIndex = ({ slice }) => {
  return (
    <Helmet>
      <html lang="en-nz" />
      <General />
      <OpenGraph />
      <Twitter />
    </Helmet>
  )
}
export default SEOIndex
