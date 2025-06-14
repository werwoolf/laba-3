/** @type {import('zudoku').ZudokuConfig} */
const config = {
    basePath: "/laba-3",
    topNavigation: [
        {id: "introduction", label: "Introduction"},
        {id: "description", label: "Overall Description"},
        {id: "requirements", label: "Specific Requirements"},
        {id: "appendices", label: "Appendices"},
    ],
    sidebar: {},
    redirects: [{from: "/", to: "/introduction"}],
    docs: {
        files: "/pages/**/*.{md,mdx}",
    }
};

export default config;
