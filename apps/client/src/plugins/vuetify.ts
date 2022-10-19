import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { en, zhHans, zhHant } from 'vuetify/locale';
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#1164ff',
    'primary-darken-1': '#0944b3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};
const vuetify = (lang?: string) => {
  return createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
    locale: {
      defaultLocale: lang || 'en-us',
      messages: { 'zh-cn': zhHans, 'en-us': en, 'zh-tw': zhHant },
    },
  });
};
export default vuetify;
