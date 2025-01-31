/** @type {import('postcss-load-config').Config} */

const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
      './src/data/**/*.{js,ts,jsx,tsx,mdx}',
      './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    whitelistPatterns: [/^slick-/],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
const config = {
  // plugins: {
  //   'postcss-import': {},
  //   tailwindcss: {},
  //   autoprefixer: {},
  // },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};

export default config;
