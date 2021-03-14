/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MogAmp',
  url: 'https://mogamp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  organizationName: 'MogAmp',
  projectName: 'Website',
  themeConfig: {
    navbar: {
	  style: 'dark',
      title: 'MogAmp',
      logo: {
        alt: 'MogAmp',
        src: '/logo.png',
      },
      items: [
		{
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'MogAmp',
              to: 'docs/mogamp',
            },
            {
              label: 'MogDoot',
              to: 'docs/mogdoot',
            },
            {
              label: 'MogNotate',
              to: 'docs/mognotate',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitch',
              href: 'https://twitch.tv/MoogleTroupe',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/4XGHQ72',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MoogleTroupe',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/MoogleTroupe',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MogAmp',
            },
			{
			  label: 'Donate',
			  href: 'https://streamelements.com/moogletroupe/tip',
			},
          ],
        },
      ],
    },
	colorMode: {
      defaultMode: 'dark'
	},
	metadatas: [
      {
        property: 'og:image',
        content: 'https://mogamp.com/logo.png',
      },
      {name: 'twitter:card', content: 'summary_large_image'},
      {
        name: 'twitter:image',
        content: 'https://mogamp.com/logo.png',
      },
      {name: 'twitter:site', content: '@MoogleTroupe'},
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
		  showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/MogAmp/Website/blob/main/',
        },
        theme: {
          //customCss: require.resolve('./src/css/custom.css'),
		  customCss: [
            require.resolve('./src/css/customTheme.scss'),
          //  require.resolve('./src/css/index.scss'),
          //  require.resolve('./src/css/showcase.scss'),
          //  require.resolve('./src/css/versions.scss'),
          ],
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
	localeConfigs: {
      en: {
        label: 'English',
      },
//	  fr: {
//        label: 'Français',
//      },
//      ja: {
//        label: '日本語',
//      },
      ko: {
        label: '한국어',
      },
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
      },
    ],
  ],
};
