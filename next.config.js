const withTM = require('next-transpile-modules')([
  '@learn-bit-react/base-ui.styles.button',
  '@learn-bit-react/base-ui.ui.heading',
  '@learn-bit-react/base-ui.ui.button',
  // '@learn-bit-react/shoe-store.ui.pages.home-shoes'
  '@learn-bit-react/ecommerce.ui.header'
]);
module.exports = withTM({
  reactStrictMode: true
});
