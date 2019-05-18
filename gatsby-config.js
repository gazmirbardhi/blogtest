module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-favicon`,
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-52772725-3",
            }
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://goyalarpit.us9.list-manage.com/subscribe/post?u=58a2533d63dbcaa20121a3abe&amp;id=ac1db89723',
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 75,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
