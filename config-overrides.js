const {
  override,
  addWebpackPlugin,
  addWebpackModuleRule,
} = require('customize-cra');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override((config) => {
  addWebpackModuleRule({
    test: /\.(webp)$/i, // Regex for .webp extension
    use: [
      {
        loader: 'url-loader', // or 'file-loader' if you prefer
        options: {
          limit: 8192, // 8kb limit, above which it falls back to file-loader
          name: 'static/media/[name].[hash:8].[ext]', // Output path and naming convention
        },
      },
    ],
  });

  if (config.optimization && config.optimization.minimizer) {
    config.optimization.minimizer.push(
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          compress: {
            unused: true,
            drop_console: true,
            drop_debugger: true,
          },
          output: {
            comments: false, // Remove comments
          },
        },
        extractComments: false,
      })
    );
    config.optimization.usedExports = true;
  }

  // Add CSS minimization with CssMinimizerPlugin
  if (config.optimization && config.optimization.minimizer) {
    config.optimization.minimizer.push(
      new CssMinimizerPlugin({
        test: /\.css$/i, // Ensure it targets only CSS files
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }, // Remove comments
              normalizeUrl: false, // Do not normalize URLs (to preserve relative URLs)
            },
          ],
        },
      })
    );
  }

  // Customizing the splitChunks optimization to improve chunking and code splitting
  if (config.optimization && config.optimization.splitChunks) {
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      chunks: 'all', // Split both async and non-async chunks
      minSize: 20000, // Minimum size for a chunk to be split
      maxSize: 0, // No max size limit
      minChunks: 1, // Minimum number of chunks before splitting
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // Match dependencies in node_modules
          name: 'vendor',
          chunks: 'all', // Include both async and non-async modules
          priority: 10, // Vendor chunk has higher priority
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)/,
          name: 'react',
          chunks: 'all',
        },
        common: {
          name: 'common', // Common chunk for shared dependencies
          minChunks: 2, // Shared between 2 chunks
          chunks: 'all', // Apply to both async and non-async chunks
          priority: 5, // Lower priority than vendor
        },
      },
    };
  }

  // Add preload for fonts in the HTML template (optimization for font loading)
  config.plugins.push(
    new HtmlWebpackPlugin({
      ...config.plugins[0].options, // Retain default options
      inject: true,
      scriptLoading: 'defer',
      preload: [
        {
          rel: 'preload',
          href: '/fonts/inter.woff2', // Adjust the paths to your fonts
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/lato.woff2', // Adjust the paths to your fonts
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
      ],
    })
  );

  return config;
});
