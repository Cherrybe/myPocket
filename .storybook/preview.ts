import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/app/globals.css'

const preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/'
      }
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) =>
        a.title.localeCompare(b.title, undefined, { numeric: true })
    }
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: '[data-mode="dark"]',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ],
};

export default preview;