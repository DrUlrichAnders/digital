// forked and modified from:
// https://github.com/Mastermindzh/react-cookie-consent

import React, { Component } from "react"
import PropTypes from "prop-types"
import Cookies from "js-cookie"

export const OPTIONS = {
  TOP: "top",
  BOTTOM: "bottom"
}

class CookieConsent extends Component {
  constructor(props) {
    super(props)
    this.accept.bind(this)

    this.state = {
      visible: true,
      barStyle: {
        alignItems: "baseline",
        background: "#353535",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        left: "0",
        position: "fixed",
        width: "100%",
        zIndex: "999"
      },
      contentStyle: {
        flex: "1 0 300px",
        margin: ".5rem"
      },
      buttonStyle: {
        background: "#ffd42d",
        border: "0",
        borderRadius: "0px",
        boxShadow: "none",
        color: "black",
        flex: "0 0 auto",
        margin: ".5rem",
        padding: "5px 10px"
      }
    }
  }

  componentWillMount() {
    const { cookieName, debug } = this.props

    if (Cookies.get(cookieName) !== undefined) {
      this.setState({ visible: false })
    }

    if (debug !== undefined && debug) {
      Cookies.remove(cookieName)
      this.setState({ visible: true })
    }
  }

  /**
   * Set a persistent cookie
   */
  accept() {
    const { cookieName } = this.props

    Cookies.set(cookieName, true)
    this.setState({ visible: false })
  }

  render() {
    // If the bar shouldn't be visible don't render anything.
    if (!this.state.visible) {
      return null
    }

    const {
      location,
      barStyle,
      buttonStyle,
      contentStyle,
      disableStyles,
      onAccept,
      buttonText
    } = this.props

    let myBarStyle = {}
    let myButtonStyle = {}
    let myContentStyle = {}

    if (disableStyles) {
      // if styles are disabled use the provided styles (or non)
      myBarStyle = Object.assign({}, barStyle)
      myButtonStyle = Object.assign({}, buttonStyle)
      myContentStyle = Object.assign({}, contentStyle)
    } else {
      // if styles aren't disabled merge them with the styles that are provided (or use default styles)
      myBarStyle = Object.assign({}, { ...this.state.barStyle, ...barStyle })
      myButtonStyle = Object.assign(
        {},
        { ...this.state.buttonStyle, ...buttonStyle }
      )
      myContentStyle = Object.assign(
        {},
        { ...this.state.contentStyle, ...contentStyle }
      )
    }

    // syntactic sugar to enable user to easily select top / bottom
    switch (location) {
      case OPTIONS.TOP:
        myBarStyle.top = "0"
        break

      case OPTIONS.BOTTOM:
        myBarStyle.bottom = "0"
        break
    }

    return (
      <div className="cookieConsent" style={myBarStyle}>
        <div style={myContentStyle}>{this.props.children}</div>
        <button
          style={myButtonStyle}
          onClick={() => {
            this.accept()
            onAccept()
          }}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

CookieConsent.propTypes = {
  location: PropTypes.oneOf(["top", "bottom"]),
  barStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  disableStyles: PropTypes.bool,
  onAccept: PropTypes.func,
  buttonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]),
  cookieName: PropTypes.string
}
CookieConsent.defaultProps = {
  disableStyles: false,
  location: OPTIONS.BOTTOM,
  onAccept: () => {},
  cookieName: "CookieConsent",
  buttonText: "I understand"
}

export default CookieConsent
export { Cookies }
