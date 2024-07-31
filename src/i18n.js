import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';

import en from '../src/locales/en.json';
import zh_TW from '../src/locales/zh_TW.json';
import ja from '../src/locales/ja.json';


const resources = {
    en:{
        translation: en,
    },
    zh:{
        translation: zh_TW,
    },
    ja:{
        translation: ja,
    },

};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng : "en",
    lng : "zh",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;