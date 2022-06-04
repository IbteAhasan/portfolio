require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ibte Ahasan`,
    siteUrl: `https://ibte-ahasan.ml`,
    author: `Ibte Ahasan`,
    description: `Hi, I am Ibte Ahasan. I like building interactive web applications that need both front-end and back-end programming.`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "vscode",
              lineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `case-studies`,
        path: `${__dirname}/contents/case-studies`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ibte Ahasan`,
        short_name: `IA`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Montserrat\:200,300,400,400i,500,600,700,800,900`,
          `Barlow\:200,300,400,200i,300i,400i,500,600,700,800,900`,
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
