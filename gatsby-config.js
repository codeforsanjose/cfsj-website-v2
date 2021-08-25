module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "cfsj-website",
	},
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Rubik`],
				display: "swap",
			},
		},
	],
};
