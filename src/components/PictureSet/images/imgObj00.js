import genImgObj from "../components/PictureSet/genImgObj"

// const generateImgObject = require("./generateImgObject").default
// this is for Webpack to allow for dynamically requiring resources
// https://webpack.js.org/guides/dependency-management/#require-context
// require.context() cannot take variables

//             RELATIVE PATH TO IMAGES FROM HERE  ↓
const requireFromContext = require.context("../assets/img/", true, /00\.jpg$/)
// CHANGE HERE  ↓                                         AND HERE  ↑
let imgName = "00"

const imgStatic = {
  imgPath: "./", // relative to require.context
  imgName: imgName,
  extension: ".jpg",
  blurResolution: "0100",
}

// Setup for image. Do not include blurResolution
// "resolution": "aspectRatio"
const imgParams = {
  "0480": "4x3",
  "1000": "21x9",
}

let imgObj = genImgObj(imgParams, imgStatic, requireFromContext)

export default imgObj
