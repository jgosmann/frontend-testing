module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        // Loader for webpack to process CSS with PostCSS
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            postcssOptions: {
              path: "./.storybook/",
            },
          },
        },
      ],
    });
    return config;
  },
};
