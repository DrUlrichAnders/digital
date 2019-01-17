# genImgObj

`genImgObj()` is a helper function that generates an image object of the following form:

```js
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
```

For this `genImgObj()` requires an `imgParams` object, an `imgStatic` object and a function `requireFromContext` where the images are located.


```js
// Setup for image. Do not include blurResolution
// "resolution": "aspectRatio"
const imgParams = {
  "0480": "4x3",
  "1000": "21x9",
}

const imgStatic = {
  imgPath: "./", // relative to require.context
  imgName: "01",
  extension: ".jpg",
  blurResolution: "0100",
}

const requireFromContext = require.context("../assets/img/", true, /01\.jpg$/)


imgObj01 = genImgObj(imgParams01, imgStatic01, requireFromContext)
``` 


