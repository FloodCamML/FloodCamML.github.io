const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Flood CamML",
  tagline: "Using machine learning (ML) to automatically detect flooding with webcams",
  url: "https://FloodCamML.github.io",
  baseUrl: "/",
  // trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/docusaurus.png",
  organizationName: "FloodCamML", // Usually your GitHub org/user name.
  projectName: "FloodCamML.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Flood CamML",
      hideOnScroll: true,
      logo: {
        alt: "My Site Logo!",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs"
        },
        { to: "/about", label: "About", position: "left" },
        {
          href: "https://floodcamml.org",
          label: "NC-12 app",
          position: "right"
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/FloodCamML",
          label: "GitHub",
          position: "right"
        },
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/FloodCamML"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flood CamML. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['r']
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/FloodCamML"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
