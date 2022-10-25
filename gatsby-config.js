module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */

      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `http://bml-ventures.local/graphql`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
