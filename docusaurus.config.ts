import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'aungmm.dev',
  tagline: 'Cybersecurity Professional | Security Engineering | Defense Operations',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://aungmm.dev',
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
      // Site is dark-only; the design does not support a light theme, so the
      // toggle is disabled and dark is forced.
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'aungmm.dev',
        src: 'img/logo-wordmark.svg',
        href: '/',
      },
      hideOnScroll: false,
      items: [
        {to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$'},
        {to: '/talks', label: 'Talks', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
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
              label: 'Talks',
              to: '/talks',
            },
            {
              label: 'Projects',
              to: '/projects',
            },
            {
              label: 'Contributions',
              to: '/contributions',
            },
            {
              label: 'Hobbies',
              to: '/hobbies',
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
