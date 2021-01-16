/* config-overrides.js */

module.exports = function override(config, env) {
    require('react-app-rewire-postcss')(config, {
        plugins: loader => [
          require('postcss-import')(),
          require('postcss-nested')(),
        ]
      });
    return config;
  }