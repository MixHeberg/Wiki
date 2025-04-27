// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MixHeberg Wiki",
  tagline: "",
  favicon: "img/favicon.ico",

  url: "https://wiki.mixheberg.fr",
  baseUrl: "/",

  organizationName: "mixheberg",
  projectName: "wiki",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "MixHeberg Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://mixheberg.fr/",
            label: "Site",
            position: "right",
          },
          {
            href: "https://github.com/mixheberg/wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          /*{
            title: "Wiki",
            items: [
              {
                label: "Minecraft",
                to: "/Minecraft/intro",
              },
            ],
          },*/
          {
            title: "Communautaire",
            items: [
              {
                label: "Discord",
                href: "https://discord.mixheberg.fr/",
              },
            ],
          },
          {
            title: "Autres",
            items: [
              {
                label: "Site vitrine",
                href: "https://mixheberg.fr",
              },
              {
                label: "GitHub",
                href: "https://github.com/mixheberg/wiki",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MixHeberg,. Fait avec ❤️ (et Docusaurus.)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
    }),
};

export default config;
