/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MogMusic',
  tagline: 'It\'s Moogle Magic',
  url: 'https://mogmusic.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  organizationName: 'MogMusic',
  projectName: 'Website',
  themeConfig: {
    navbar: {
      title: 'MogMusic',
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
              href: 'https://github.com/MogMusic',
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
            'https://github.com/MogMusic/Website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ja', 'ko'],
	localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
	  fr: {
        label: 'Français',
        direction: 'ltr',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
      },
    },
  },
};
