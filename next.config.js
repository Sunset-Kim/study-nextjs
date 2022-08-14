/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
    $primary: #ba3b46;
$secondary: #61c9a8;
$tertiary: #ed9b40;
$white: #ffeedb;
$brown: #aa8f66;`,
  },
};

module.exports = nextConfig;
