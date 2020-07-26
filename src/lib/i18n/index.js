import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationPtBr } from '../../config/translations/translations';


const resources = { 'pt-BR': { translation: translationPtBr } };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export default i18n;
