/** @type {import('zudoku').ZudokuConfig} */
const config = {
    basePath: "/technical-report",
    topNavigation: [
        {id: "introduction", label: "Introduction"},
        {id: "description", label: "Overall Description"},
        {id: "requirements", label: "Specific Requirements"},
        {id: "appendices", label: "Appendices"},
    ],
    sidebar: {},
    redirects: [{from: "/", to: "/docs/introduction"}],
    docs: {
        files: "/pages/**/*.{md,mdx}",
    }
};

export default config;
