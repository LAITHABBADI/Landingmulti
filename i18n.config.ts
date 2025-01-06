
import { type InitOptions } from 'i18next';
import path from 'path';

const i18nConfig: InitOptions = {
  fallbackLng: 'en',
  lng: 'en',
  debug: process.env.NODE_ENV === 'development',
  supportedLngs: ['en', 'ar', 'es', 'de', 'zh'],
  ns: ['common', 'home'],
  defaultNS: 'common',
  backend: {
    loadPath: path.resolve('./public/locales/{{lng}}/{{ns}}.json'),
  },
  react: {
    useSuspense: false,
  },
};

export default i18nConfig;
