import * as React from 'react'
import './index.scss'

const EmbedVideo = ({ embedURL }) => {
  return (
    <iframe
      className={'embedVid'}
      width="100%"
      height="auto"
      title="Video player"
      loading="lazy"
      src={embedURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export default EmbedVideo
