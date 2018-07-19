import Typography from "typography"

const typography = new Typography({
  includeNormalize: true,
  omitGoogleFont: true,
  googleFonts: [
    {
      name: "Ubuntu",
      styles: ["400"]
    },
    {
      name: "Roboto",
      styles: ["400"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    }
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Ubuntu", "sans-serif"],
  headerWeight: "normal",
  bodyFontFamily: ["Open Sans", "sans-serif"]
})

export default typography
