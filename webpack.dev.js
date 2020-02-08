const webpack = require("webpack");
const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",

        options: {
          plugins: ["syntax-dynamic-import"],

          presets: [
            "minify",
            [
              "@babel/preset-env",
              {
                modules: false
              }
            ]
          ]
        },

        test: /\.js$/
      },
      {
        use: ["vue-loader"],
        test: /\.vue$/
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                indentedSyntax: true
              }
            }
          }
        ]
      }
    ]
  },

  entry: {
    app: "./src/app/index.js"
  },

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },

  mode: "development",
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.join(__dirname, "src")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      globDirectory: "./dist",
      globPatterns: ["*.{html,js,css}", "fonts/*.{eot,ttf,woff,woff2,svg}"],
      swDest: "./sw.js",
      clientsClaim: true,
      skipWaiting: true
    }),
    new WebpackPwaManifest({
      name: "Calories Calculator",
      short_name: "CalCal",
      description: "Tiny Application made in Vue.js to calculate calories.",
      start_url: "/",
      display: "standalone",
      orientation: "portrait",
      icons: [
        {
          src: "./assets/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        }
      ]
    }),
    new webpack.DefinePlugin({
      INSTRUMENTATION_KEY: JSON.stringify(process.env.INSTRUMENTATION_KEY)
    })
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
};
