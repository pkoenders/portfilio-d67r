import * as React from 'react'
import GoogleMapReact from 'google-map-react'
import linkResolver from '../../../utils/linkResolver'
import { RichText } from 'prismic-reactjs'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #bebebe;
  aspect-ratio: 16/9;

  .pin {
    display: inline-flex;
    align-items: flex-start;
    margin-left: -20px;
    width: 100%;
    font-size: initial;

    p {
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.pageHold.default};
      background-color: #ffffff;
      border: 1px solid ${({ theme }) => theme.colors.card[900]};
      border-radius: ${({ theme }) => theme.borderRadius.sm};
      box-shadow: ${({ theme }) => theme.boxShadow.md};
      margin-left: ${({ theme }) => theme.margin['1/8']};
      padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/2']};
    }

    i {
      font-size: 40px;
      color: ${({ theme }) => theme.colors.accent.default};
      margin: 0;
      padding: 0;
      line-height: 0;
      text-shadow: ${({ theme }) => theme.boxShadow.md};
      text-shadow: 0px 2px 6px ${({ theme }) => theme.colors.card[600]};
    }
  }
`

const LocationPin = ({ description }) => {
  return (
    <div className="pin">
      <IconMaterial icon={'place'} />
      <RichText render={description} linkResolver={linkResolver} />
    </div>
  )
}

const GoogleMap = ({ geopoint, description, zoomLevel }) => {
  // console.log('lat = ' + geopoint.latitude)
  // console.log('lng = ' + geopoint.longitude)
  // console.log('description = ' + description)
  // console.log('zoomLevel = ' + zoomLevel)

  const location = {
    // address: '110C Linton West End, Palmerston North 4410.',
    // lat: -40.364737,
    // lng: 175.614543,
    //address: description,
    lat: geopoint.latitude,
    lng: geopoint.longitude,
  }

  return (
    // Important! Always set the container height explicitly
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAqtG-6jfYqhE9-yb6A0QYJ1z5onDubltQ' }}
        defaultCenter={location}
        defaultZoom={zoomLevel} // Must be <= 22 - Default 16
        // yesIWantToUseGoogleMapApiInternals={true}
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <LocationPin lat={location.lat} lng={location.lng} description={description} />
      </GoogleMapReact>
    </MapWrapper>
  )
}

export default GoogleMap
