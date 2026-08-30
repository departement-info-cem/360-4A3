// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from "prism-react-renderer";

const siteConfig = require("./config");

const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;

const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: siteConfig.nom,
    tagline: siteConfig.description,
    url: "https://info.cegepmontpetit.ca/",
    baseUrl: `/${siteConfig.nomUrl}/`,
    onBrokenLinks: "throw",
    favicon: "img/favicon.ico",

    organizationName: "departement-info-cem",
    projectName: siteConfig.nomUrl,
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    i18n: {
        defaultLocale: "fr",
        locales: ["fr"],
    },

    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownLinks: "warn",
        },
    },

    themes: ["@docusaurus/theme-mermaid"],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "/",
                    // editUrl: `https://github.com/departement-info-cem/${siteConfig.nomUrl}/tree/main/web`,
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                    admonitions: {
                        keywords: ['note-nt', 'info-nt', 'tip-nt', 'warning-nt', 'danger-nt'],
                        extendDefaults: true,
                    },
                },
                theme: {
                    customCss: [require.resolve("./src/css/custom.css")],
                },
                blog: {
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                    admonitions: {
                        keywords: ['note-nt', 'info-nt', 'tip-nt', 'warning-nt', 'danger-nt'],
                        extendDefaults: true,
                    },
                },
                pages: {
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                    admonitions: {
                        keywords: ['note-nt', 'info-nt', 'tip-nt', 'warning-nt', 'danger-nt'],
                        extendDefaults: true,
                    },
                },
            }),
        ],
    ],

    plugins: [require.resolve("./plugins/docs-metadata")],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            colorMode: {
                defaultMode: 'dark',               // 🌙 site démarre en mode sombre
                respectPrefersColorScheme: false,  // ignore le mode du système
            },
            navbar: {
                // title: siteConfig.nom,
                title: "4A3 (Projet scientifique de fin d'études)",
                logo: {
                    alt: "Logo CEM",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "cours/semaine1",
                        position: "left",
                        label: "Cours",
                    },
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "projets",
                        label: "Projets",
                    },
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "methodes",
                        label: "Méthodes",
                    },
                    {
                        type: "docSidebar",
                        position: "left",
                        sidebarId: "archives",
                        label: "Archives",
                    },
                    {
                        label: "SN1 (Programmation)",
                        href: `https://info.cegepmontpetit.ca/420-SN1/`,
                        position: "right",
                    },
                    {
                        label: "4A4 (Réseaux de neurones)",
                        href: `https://info.cegepmontpetit.ca/420-4A4/`,
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                // links: [
                //     {
                //         title: "Sources",
                //         items: [
                //             {
                //                 label: "GitHub",
                //                 href: `https://github.com/departement-info-cem/${siteConfig.nomUrl}`,
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()}. ${
                    siteConfig.nom
                }. CÉGEP Édouard-Montpetit.`,
            },
            // Décommenter et remplir pour activer l'indexation des pages par le moteur de recherche local
            // algolia: {
            //   appId: '',
            //   apiKey: '',
            //   indexName: '',
            //   contextualSearch: true,
            //   searchPagePath: 'search',
            // },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["csharp", "java", "dart"],
            },
            metadata: [
                {
                    name: "keywords",
                    content: `${siteConfig.nom}, ${siteConfig.description},
            4A3, 360-4A3, cem, sciences de la nature, Projet scientifique de fin d'études en informatique, projet
            programmation, python, cours programmation cégep, cégep Édouard-Montpetit, cegep Edouard Montpetit,
            informatique, cégep, cegep, édouard-montpetit, edouard-montpetit, édouard montpetit, edouard montpetit`,
                },
                {
                    name: "description",
                    content: siteConfig.description,
                },
                {
                    property: "og:title",
                    content: siteConfig.nom,
                },
                {
                    property: "og:description",
                    content: siteConfig.description,
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:image",
                    content: "https://info.cegepmontpetit.ca/360-4A3/img/logo.svg"
                },
                {
                    property: "og:url",
                    content: "https://info.cegepmontpetit.ca/360-4A3/"
                }
            ],
        }),
};

module.exports = config;
