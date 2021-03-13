/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MogAmp',
  tagline: 'It\'s Moogle Magic',
  url: 'https://mogamp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  organizationName: 'MogAmp',
  projectName: 'Website',
  themeConfig: {
    navbar: {
      title: 'MogAmp',
      logo: {
        alt: 'Logo',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/MogAmp/Website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        direction: 'ltr',
      },
//	  fr: {
//        label: 'Français',
//        direction: 'ltr',
//      },
//      ja: {
//        label: '日本語',
//        direction: 'ltr',
//      },
      ko: {
        label: '한국어',
        direction: 'ltr',
      },
    },
  },
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // Options here
    }]
  ],
};
