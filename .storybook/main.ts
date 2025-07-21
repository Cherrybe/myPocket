import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  docs: {
    autodocs: true,
  },
  "staticDirs": [
    "..\\public"
  ],
 webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback['module'] = false;
    config.resolve.extensions = [...(config.resolve.extensions || []), '.css'];
    return config;
  },
};
export default config;