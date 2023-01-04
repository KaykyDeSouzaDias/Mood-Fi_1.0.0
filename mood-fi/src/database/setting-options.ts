import { useTranslation } from "react-i18next";
import { ISettingOptions } from "../models";

export const settingOptionsDatabase = () => {
  const { t } = useTranslation();

  return [
    {
      name: t("translationSettingTitle"),
      description: t("translationSettingDescription"),
      type: "select",
      icon: "translate",
    },
    {
      name: t("themeSettingTitle"),
      description: t("themeSettingDescription"),
      type: "switch",
      icon: "contrast",
    },
  ] as ISettingOptions[];
};
