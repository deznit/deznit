module.exports = {
  // pathPrefix: "/deznit",
  siteMetadata: {
    title: `Deznit`,
    description: `Lets Learn Something New`,
    author: `@deznit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#161824`,
        theme_color: `#3eefd8`,
        display: `minimal-ui`,
        icon: `static/images/faviconDeznit.png`, // This path is relative to the root of the site.
      },
    },
    // plugin to get posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    // plugin to get authors
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `contributors`,
    //     path: `${__dirname}/src/content/contributors`,
    //   },
    // },

    // plugin for mdx
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // optional plugin if you want to use code syntax highlighting
          // $ yarn add gatsby-transformer-remark gatsby-remark-prismjs prismjs
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLanguage: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-147626941-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
  ],
}
