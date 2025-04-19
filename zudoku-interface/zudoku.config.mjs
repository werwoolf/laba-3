/** @type {import('zudoku').ZudokuConfig} */
const config = {
        basePath: "/laba-3",
        topNavigation: [
            {id: "docs", label: "Documentation"},
            {id: "api", label: "API Reference"},
            {id: "about", label: "About"},
        ],
        sidebar: {
            docs: [
                {
                    type: "category",
                    label: "Overview",
                    items: ["docs/introduction", "docs/example"],
                },
            ],
            about:
                [
                    {
                        type: "link",
                        label: "Installation",
                        href: "about/installation",
                    },
                    {
                        type: "link",
                        label: "Authorization",
                        href: "about/authorization",
                    },
                    {
                        type: "link",
                        label: "About",
                        href: "about/about",
                    },
                ],
        },
        redirects: [{from: "/", to: "/docs/introduction"}],
        apis:
            {
                type: "file",
                input:
                    "./apis/home-work.json",
                navigationId:
                    "api",
            }
        ,
        docs: {
            files: "/pages/**/*.{md,mdx}",
        }
        ,
    }
;

export default config;
