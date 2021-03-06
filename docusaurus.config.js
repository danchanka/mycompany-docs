const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'MyCompany documentation',
  tagline: 'MyCompany',
  url: 'https://danchanka.github.io',
  baseUrl: '/mycompany-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'danchanka', // Usually your GitHub org/user name.
  projectName: 'mycompany-docs', // Usually your repo name.
  trailingSlash: true,
 
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/danchanka/mycompany-docs/edit/master/',
          editLocalizedFiles: true,
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MyCompany',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/lsfusion-solutions/mycompany',
            label: 'GitHub',
            position: 'right',
          },
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
            title: 'MyCompany',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Website',
                href: 'https://mycompany.lsfusion.org/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://ru.stackoverflow.com/questions/tagged/lsfusion',
              },
              {
                label: 'Slack',
                href: 'https://slack.lsfusion.org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Habr',
                href: 'https://habr.com/ru/company/lsfusion/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lsfusion-solutions/mycompany',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} lsFusion Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ru: {
        label: '??????????????',
      },
    },  
  },
});
