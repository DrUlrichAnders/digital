# PictureSet

PictureSet renders a `<picture />` with different sources per media and for
each uses the LQIP (Low Quality Image Placeholder) technique for each
the images per media.

For this `<PictureSet />` requires a custom prop , that looks like below.
To construct such an imageObject there is a helper function `genImgObj()`

```jsx
import PictureSet from "./PictureSet"

const imgObj01 = {
  "0100": {
    "4x3": "0100/4x3/img01.jpg",
    "16x9": "0100/16x9/img01.jpg"
  },
  "0480": {"4x3": "0480/4x3/img01.jpg"},
  "1000": {"16x9": "1000/16x9/img01.jpg"},
  blurResolution: "0100",
  resolutions: ["1000", "0480"]
}

<PictureSet
  // custom prop
  imgObj={imgObj01}
  // alt="Missing image"
  // className="lazyload blur-up"
  // sizes="100vw"
/>
```






