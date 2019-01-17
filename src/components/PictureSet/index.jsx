import React from "react"
import Picture from "../../components-styled/Picture"
import Source from "../../components-styled/Source"
import Img from "../../components-styled/Img"
import PropTypes from "prop-types"
import PictureFrame from "./styled/PictureFrame"

/**
 * PictureSet renders a <picture/> with different sources per media and for
 * each uses the LQIP (Low Quality Image Placeholder) technique for each
 * the images per media.
 *
 * The PictureSet is surrounded by a PictureFrame, which fixes the aspectRatio.
 *
 * For this <PictureSet /> requires a custom prop , that looks like:
 * const imgObj01 = {
 *   "0100": {
 *     "4x3": "0100/3x2/img01.jpg",
 *     "16x9": "0100/16x9/img01.jpg"
 *   },
 *   "0480": {"4x3": "0480/3x3/img01.jpg"},
 *   "1000": {"16x9": "1000/16x9/img01.jpg"},
 *   blurResolution: "0100",
 *   resolutions: ["1000", "0480"]
 * }
 *
 * To construct such an imageObject there is a helper function genImgObj()
 *
 * @class PictureSet
 * @extends {React.Component}
 */
class PictureSet extends React.Component {
  render() {
    const { imgObj } = this.props
    const { resolutions } = imgObj
    const R = imgObj.resolutions.length
    let mediaStrings = ["(min-width: 0)"]
    let paddingsInPercent = []

    for (let r = R - 1; r >= 0; r--) {
      let resolution = resolutions[r]
      // Object.keys returns array
      let aspectRatio = Object.keys(imgObj[resolution])[0]
      let x = Number(aspectRatio.split("x")[0])
      let y = Number(aspectRatio.split("x")[1])
      let paddingInPercent = (y * 100) / x
      paddingsInPercent.push(paddingInPercent)

      if (r < R - 1) {
        // the mediaString comes from the next resolution + 1
        let mediaString = `(min-width: ${(
          Number(resolutions[r + 1]) + 1
        ).toString()}px)`
        // console.log({ r, resolution, mediaString })
        mediaStrings.push(mediaString)
      }
    }

    return (
      <PictureFrame
        mediaStrings={mediaStrings}
        paddingsInPercent={paddingsInPercent}
      >
        <Picture>{this.renderSources()}</Picture>
      </PictureFrame>
    )
  }

  renderSources = () => {
    const { imgObj, sizes, alt, className } = this.props
    const { blurResolution, resolutions } = imgObj
    const R = imgObj.resolutions.length

    let renderedSources = []
    // The last resolutions[resolutions.length - 1] is the is for the <img />,
    // i.e. mobile first.
    for (let r = 0; r < R; r++) {
      let resolution = resolutions[r]
      // Object.keys returns array
      let aspectRatio = Object.keys(imgObj[resolution])[0]

      if (r < R - 1) {
        // the mediaString comes from the next resolution + 1
        let mediaString = `(min-width: ${(
          Number(resolutions[r + 1]) + 1
        ).toString()}px)`
        // console.log({ r, resolution, aspectRatio, mediaString })
        renderedSources.push(
          <Source
            key={resolution}
            media={mediaString}
            srcSet={imgObj[blurResolution][aspectRatio]}
            data-srcset={imgObj[resolution][aspectRatio]}
          />
        )
      } else {
        // console.log({ r, resolution, aspectRatio })
        renderedSources.push(
          <Img
            key={resolution}
            data-sizes={sizes}
            srcSet={imgObj[blurResolution][aspectRatio]}
            data-srcset={imgObj[resolution][aspectRatio]}
            className={className}
            alt={alt}
          />
        )
      }
    }

    return renderedSources
  }
}

PictureSet.propTypes = {
  imgObj: PropTypes.object.isRequired,
  sizes: PropTypes.string,
  alt: PropTypes.string,
}

PictureSet.defaultProps = {
  alt: "Missing image",
  className: "lazyload blur-up",
  sizes: "100vw",
}

export default PictureSet
