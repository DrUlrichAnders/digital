const imageName = "08"

const extension = ".jpg"
const imgPath = "./"

const imgSetup = {
  '0100': ['16x9'],
  '1200': ['16x9'],
}

let resolutions = Object.keys(imgSetup)

let img = {}


  for (let r = 0; r < resolutions.length; r++) {
    img[resolutions[r]] = {}
    let aspectRatios = imgSetup[resolutions[r]]
    for (let a = 0; a < aspectRatios.length; a++) {
      img[resolutions[r]][aspectRatios[a]] = require(imgPath + resolutions[r] + "/" + aspectRatios[a] + "/" + imageName + extension)
    }
  }

  console.log("08: ", img)

export default img
