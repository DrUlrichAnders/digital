var moment = require("moment")

module.exports = {
  siteMetadata: {
    title: "DNE",
    version: "1.4.0",
    date: moment().format("MMM DD, YYYY (HH:mm)"),
    siteUrl: "https://dne.netlify.com"
  },
  plugins: [
    "gatsby-image",
    "gatsby-link",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    }
  ]
}
