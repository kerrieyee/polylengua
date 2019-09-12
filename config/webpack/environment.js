const { environment } = require('@rails/webpacker');
const merge = require('webpack-merge');

const generateScopedName = (localName, resourcePath) => {
  const componentName = resourcePath.split('/').pop().replace('.scss', '');

  return Buffer.from(componentName).toString('base64').replace(/\W/, '') + '__' + localName;
};

const myCssLoaderOptions = {
  modules: true,
  sourceMap: true,
  getLocalIdent: (context, localIdentName, localName, options) => {
    return generateScopedName(localName, context.resourcePath );
  },
};

const CSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'css-loader');

CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions);

module.exports = environment;
