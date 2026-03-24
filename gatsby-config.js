module.exports = {
  siteMetadata: {
    title: 'OZE Podkarpacie',
    description: 'Portal o odnawialnych źródłach energii na Podkarpaciu',
    siteUrl: 'https://oze-podkarpacie.netlify.app',
    author: 'Redakcja OZE Podkarpacie',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
