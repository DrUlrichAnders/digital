import React from "react"
import PropTypes from "prop-types"

const Source = props => {
  const { name, children } = props
  return (
    <p style={{ textAlign: "right" }}>
      <span style={{ fontStyle: "italic" }}>{name}:</span> {children}
    </p>
  )
}

Source.PropTypes = {
  name: PropTypes.string,
  source: PropTypes.string
}

Source.defaultProps = {
  name: "Source"
}

export default Source
