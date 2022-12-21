import { ISettingOptions } from "../models";

export const settingOptionsDatabase = [
  {
    name: "Change Language",
    description: "Choose a language that makes you comfortable.",
    type: "select",
    icon: "translate",
    status: "English",
    value: "pt-Br",
  },
  {
    name: "Change Theme",
    description: "Choose a theme that makes you comfortable.",
    type: "switch",
    icon: "contrast",
    status: "Dark Mode",
    value: false,
  },
] as ISettingOptions[];
