import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { translationDatabase } from "../../database";

const lang = translationDatabase;

export const translation = i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          watchLiveButton: lang.english.menu.watchLiveButton,
          discoverButton: lang.english.menu.discoverButton,
          referencesButton: lang.english.menu.referencesButton,
          settingsButton: lang.english.menu.settingsButton,

          discoverPageTitle: lang.english.discoverPage.pageTitle,
          discoverDescription: lang.english.discoverPage.description,

          referencesPageTitle: lang.english.referencesPage.pageTitle,
          referencesDescription: lang.english.referencesPage.description,

          settingsPageTitle: lang.english.settingsPage.pageTitle,
          settingsDescription: lang.english.settingsPage.description,

          translationSettingTitle:
            lang.english.settingsPage.translationSettingTitle,
          translationSettingDescription:
            lang.english.settingsPage.translationSettingDescription,
          settingsEnglishTranslationOption:
            lang.english.settingsPage.englishTranslationOption,
          settingsPortugueseTranslationOption:
            lang.english.settingsPage.portugueseTranslationOption,

          themeSettingTitle: lang.english.settingsPage.themeSettingTitle,
          themeSettingDescription:
            lang.english.settingsPage.themeSettingDescription,
        },
      },
      "pt-BR": {
        translation: {
          watchLiveButton: lang.portuguese.menu.watchLiveButton,
          discoverButton: lang.portuguese.menu.discoverButton,
          referencesButton: lang.portuguese.menu.referencesButton,
          settingsButton: lang.portuguese.menu.settingsButton,

          discoverPageTitle: lang.portuguese.discoverPage.pageTitle,
          discoverDescription: lang.portuguese.discoverPage.description,

          referencesPageTitle: lang.portuguese.referencesPage.pageTitle,
          referencesDescription: lang.portuguese.referencesPage.description,

          settingsPageTitle: lang.portuguese.settingsPage.pageTitle,
          settingsDescription: lang.portuguese.settingsPage.description,

          translationSettingTitle:
            lang.portuguese.settingsPage.translationSettingTitle,
          translationSettingDescription:
            lang.portuguese.settingsPage.translationSettingDescription,
          settingsEnglishTranslationOption:
            lang.portuguese.settingsPage.englishTranslationOption,
          settingsPortugueseTranslationOption:
            lang.portuguese.settingsPage.portugueseTranslationOption,

          themeSettingTitle: lang.portuguese.settingsPage.themeSettingTitle,
          themeSettingDescription:
            lang.portuguese.settingsPage.themeSettingDescription,
        },
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });
