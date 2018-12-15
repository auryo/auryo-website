module.exports = {
  siteMetadata: {
    title: 'Auryo',
    description: 'A beautiful SoundCloud client for your desktop. Be more productive and enjoy a native experience.',
    keywords: 'soundcloud,desktop,auryo,linux,mac,windows,free,SoundCloud',
    siteUrl: "https://auryo.com",
    author: "sneljo",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#0275d8',
        display: 'standalone',
        icon: 'src/images/auryo-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Titillium Web:700', 'Asap:400,600']
        }
      }
    },
    {
      resolve: `@mosch/gatsby-source-github`,
      options: {
        repository: "auryo",
        tree: false,
        releases: true,
        user: "Superjo149",
        secrets: {
          token: process.env.GITHUB_TOKEN,
        }
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-102550646-1',
      },
    },
    'gatsby-plugin-sitemap'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
