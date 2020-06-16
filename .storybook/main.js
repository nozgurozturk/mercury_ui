const path = require('path')
module.exports = {
  //stories: ["../src/stories/**/*.stories.(ts|tsx|js|jsx)"],
  addons: ['@storybook/addon-knobs/register', 'storybook-addon-react-docgen', '@storybook/addon-info'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });    
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
            propFilter: (prop, component) => {
                if (prop.parent) {
                  return !prop.parent.fileName.includes("node_modules");
                }
                return true;
              },
            },
        },
      ],
    });
  
    config.resolve.extensions.push(".ts", ".tsx", ".js");

    return config;
  }
};