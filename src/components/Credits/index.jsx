import React from "react"
import PropTypes from "prop-types"

const Credits = props => {
  const { name, children } = props
  return (
    <p style={{ textAlign: "right" }}>
      <span style={{ fontStyle: "italic" }}>{name}:</span> {children}
    </p>
  )
}

Credits.propTypes = {
  name: PropTypes.string,
  credits: PropTypes.string
}

Credits.defaultProps = {
  name: "Credits"
}

export default Credits
