/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.rndyrmdhn.me',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }]
    },
    sitemapSize: 10000
};