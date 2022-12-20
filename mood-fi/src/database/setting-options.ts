import { ISettingOptions } from "../models";

export const settingOptionsDatabase = [
  {
    name: "Change Language",
    description: "kayky dias",
    type: "select",
    icon: "translate",
    status: "Português",
    value: "pt-Br",
  },
  {
    name: "Change Theme",
    description: "kayky dias",
    type: "switch",
    icon: "contrast",
    status: "Dark Mode",
    value: false,
  },
] as ISettingOptions[];
