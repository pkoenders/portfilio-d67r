import React from 'react'
import Components from './staticComponetsList'

const StaticComponent = ({ slice }) => {
  var type = slice.primary.component_name
  const ComponentToRender = Components[type]
  return <ComponentToRender />
}

export default StaticComponent
