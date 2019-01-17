/**
 * genImgObj
 *
 * @param {Object} imgParams - image resolution and aspect ratio
 * @param {Object} imgStatic - static infos for image, such as name, extension
 * @param {Object} requireFromContext - Webpack context to find image
 * @returns imgObj, such as
 imgObj01 =
 {
   "0100": {
     "4x3": "0100/4x3/img01.jpg",
     "16x9": "0100/16x9/img01.jpg"
   },
   "0480": {"3x2": "0480/4x3/img01.jpg"},
   "1000": {"16x9": "1000/16x9/img01.jpg"},
   blurResolution: "0100",
   resolutions: ["1000", "0480"]
 }
 */
function genImgObj(imgParams, imgStatic, requireFromContext) {
  const resolutions = Object.keys(imgParams)
  const aspectRatios = Object.values(imgParams)
  const blurResolution = imgStatic.blurResolution

  // build up imgObj
  let imgObj = { blurResolution }
  imgObj[blurResolution] = {}

  // fill img with imgParams Info
  for (let r = 0; r < resolutions.length; r++) {
    imgObj[resolutions[r]] = {}
    let aspectRatio = imgParams[resolutions[r]]
    // console.log(
    //   r,
    //   imgStatic.imgPath +
    //     resolutions[r] +
    //     "/" +
    //     aspectRatio +
    //     "/" +
    //     imgStatic.imgName +
    //     imgStatic.extension
    // )
    imgObj[resolutions[r]][aspectRatio] = requireFromContext(
      imgStatic.imgPath +
        resolutions[r] +
        "/" +
        aspectRatio +
        "/" +
        imgStatic.imgName +
        imgStatic.extension
    )
  }

  // fill img with blurResolution aspect ratios
  for (let a = 0; a < aspectRatios.length; a++) {
    imgObj[blurResolution][aspectRatios[a]] = requireFromContext(
      imgStatic.imgPath +
        blurResolution +
        "/" +
        aspectRatios[a] +
        "/" +
        imgStatic.imgName +
        imgStatic.extension
    )
  }

  // Sort from large to small, because sources need to be from large to small
  imgObj.resolutions = resolutions
    .map(x => Number(x))
    .sort((a, b) => b - a)
    .map(x => x.toString().padStart(4, "0"))

  // console.log({ imgStatic, imgObj })
  return imgObj
}

export default genImgObj
