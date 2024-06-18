/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: true,
  tabWidth: 2,
  singleQuote: false,
  printWidth: 100,
  trailingComma: "all",
  bracketSameLine: false,
};

export default config;
