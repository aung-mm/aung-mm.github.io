import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aung Myint Myat',
  tagline: 'Cybersecurity Professional | Security Engineering | Defense Operations',
  favicon: 'img/detective.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://aungmmtech.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aung-mm', // Usually your GitHub org/user name.
  projectName: 'aung-mm.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable docs for now, we'll use custom pages
        blog: false, // Disabled - using custom blog page with particles
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Aung Myint Myat',
      logo: {
        alt: 'Aung Myint Myat Logo',
        src: 'img/detective.svg',
      },
      hideOnScroll: false,
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/contributions', label: 'Contributions', position: 'left'},
        {to: '/hobbies', label: 'Hobbies', position: 'left'},
        {
          href: 'https://linkedin.com/in/aungmm',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/aung-mm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Navigate',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Projects',
              to: '/projects',
            },
            {
              label: 'Contributions',
              to: '/contributions',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/aungmm',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/aung-mm',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Aung Myint Myat`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
