import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./en.json";
import { NativeModules, Platform } from "react-native";

export const translate = (a, b) => {
  return a;
};

const resources = {
  en: {
    translation: english
  }
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

const currentLocale =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

const isRTL = i18n.dir() !== "ltr";
export { currentLocale, isRTL };
