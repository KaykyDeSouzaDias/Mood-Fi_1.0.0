import { CSSProperties, Key } from "react";

import { CSSObject, MantineTheme, MantineThemeOverride } from "@mantine/core";

type MoodFiColors =
  | "deepYellow"
  | "shallowOrange"
  | "brightYellow"
  | "error"
  | "neutral"
  | "neutralVariant";

type MaterialYouPattern =
  | "primary"
  | "onPrimary"
  | "primaryContainer"
  | "onPrimaryContainer"
  | "secondary"
  | "onSecondary"
  | "secondaryContainer"
  | "onSecondaryContainer"
  | "tertiary"
  | "onTertiary"
  | "tertiaryContainer"
  | "onTertiaryContainer"
  | "error"
  | "onError"
  | "errorContainer"
  | "onErrorContainer"
  | "background"
  | "onBackground"
  | "surface"
  | "onSurface"
  | "surfaceVariant"
  | "onSurfaceVariant"
  | "outline"
  | "inverseSurface"
  | "inverseOnSurface";

type MoodFiThemePattern =
  | "background"
  | "container"
  | "primary"
  | "inversePrimary"
  | "schemeToggle"
  | "transparentButtonHover"
  | "transparentButtonClickOrActive"
  | "textInputWebkitShadow"
  | "tableHead"
  | "tableStripe"
  | "tableHover"
  | "sandOutlineButtonText"
  | "sandOutlineButtonBGHover"
  | "vessel"
  | "certificate"
  | "report"
  | "extension"
  | "item"
  | "action"
  | "boxLabelReportBG"
  | "boxLabelReportFG"
  | "boxLabelVesselBG"
  | "boxLabelVesselFG"
  | "onError";

type ColorShades =
  | "p0"
  | "p10"
  | "p20"
  | "p30"
  | "p40"
  | "p50"
  | "p60"
  | "p70"
  | "p80"
  | "p90"
  | "p95"
  | "p99"
  | "p100";

type ColorPalette = Record<ColorShades, string>;

export type ThemeStyles = Record<
  string,
  | Record<string, CSSObject>
  | ((theme: MantineTheme, params: any) => Record<string, CSSObject>)
>;

declare module "@mantine/core" {
  export interface MantineThemeOther {
    colors: Record<MoodFiColors, ColorPalette>;
    theme: Record<MaterialYouPattern, string>;
    moodFiTheme: Record<MoodFiThemePattern, string>;
  }
}

const AllColors: Record<MoodFiColors, ColorPalette> = {
  deepYellow: {
    p0: "#000",
    p10: "#231b00",
    p20: "#3b2f00",
    p30: "#564500",
    p40: "#725c00",
    p50: "#8f7500",
    p60: "#ad8e00",
    p70: "#cca800",
    p80: "#ecc200",
    p90: "#ffe07d",
    p95: "#fff0c8",
    p99: "#fffbff",
    p100: "#fff",
  },
  shallowOrange: {
    p0: "#000",
    p10: "#2b1700",
    p20: "#472a00",
    p30: "#663e00",
    p40: "#865300",
    p50: "#a86900",
    p60: "#cb8000",
    p70: "#f09700",
    p80: "#ffb963",
    p90: "#ffddb9",
    p95: "#ffeedf",
    p99: "#fffbff",
    p100: "#fff",
  },
  brightYellow: {
    p0: "#000",
    p10: "#201c00",
    p20: "#373100",
    p30: "#504700",
    p40: "#6a5f00",
    p50: "#867800",
    p60: "#a29200",
    p70: "#c0ac00",
    p80: "#ddc818",
    p90: "#fbe43b",
    p95: "#fff2a9",
    p99: "#fffbff",
    p100: "#fff",
  },
  error: {
    p0: "#000",
    p10: "#410002",
    p20: "#690005",
    p30: "#93000a",
    p40: "#ba1a1a",
    p50: "#de3730",
    p60: "#ff5449",
    p70: "#ff897d",
    p80: "#ffb4ab",
    p90: "#ffdad6",
    p95: "#ffedea",
    p99: "#fffbff",
    p100: "#fff",
  },
  neutral: {
    p0: "#000",
    p10: "#1e1b16",
    p20: "#33302a",
    p30: "#4a4640",
    p40: "#625e57",
    p50: "#7b776f",
    p60: "#959088",
    p70: "#b0aba2",
    p80: "#cbc6bd",
    p90: "#e8e2d9",
    p95: "#f6f0e7",
    p99: "#fffbff",
    p100: "#fff",
  },
  neutralVariant: {
    p0: "#000",
    p10: "#1f1b10",
    p20: "#343024",
    p30: "#4b4639",
    p40: "#645e50",
    p50: "#7d7767",
    p60: "#979080",
    p70: "#b2ab9a",
    p80: "#cec6b4",
    p90: "#ebe2cf",
    p95: "#f9f0dd",
    p99: "#fffbff",
    p100: "#fff",
  },
};

const MatLightThemeProps = {
  primary: AllColors.deepYellow.p40,
  onPrimary: AllColors.deepYellow.p100,
  primaryContainer: AllColors.deepYellow.p90,
  onPrimaryContainer: AllColors.deepYellow.p10,

  secondary: AllColors.shallowOrange.p40,
  onSecondary: AllColors.shallowOrange.p100,
  secondaryContainer: AllColors.shallowOrange.p90,
  onSecondaryContainer: AllColors.shallowOrange.p10,

  tertiary: AllColors.brightYellow.p40,
  onTertiary: AllColors.brightYellow.p100,
  tertiaryContainer: AllColors.brightYellow.p90,
  onTertiaryContainer: AllColors.brightYellow.p10,

  error: AllColors.error.p40,
  onError: AllColors.error.p100,
  errorContainer: AllColors.error.p90,
  onErrorContainer: AllColors.error.p10,

  background: AllColors.neutral.p99,
  onBackground: AllColors.neutral.p10,
  surface: AllColors.neutral.p99,
  onSurface: AllColors.neutral.p10,

  surfaceVariant: AllColors.neutralVariant.p90,
  onSurfaceVariant: AllColors.neutralVariant.p30,
  outline: AllColors.neutralVariant.p50,

  inverseSurface: AllColors.neutral.p10,
  inverseOnSurface: AllColors.neutral.p80,
};

const MatDarkThemeProps = {
  primary: AllColors.deepYellow.p80,
  onPrimary: AllColors.deepYellow.p20,
  primaryContainer: AllColors.deepYellow.p30,
  onPrimaryContainer: AllColors.deepYellow.p90,

  secondary: AllColors.shallowOrange.p80,
  onSecondary: AllColors.shallowOrange.p20,
  secondaryContainer: AllColors.shallowOrange.p30,
  onSecondaryContainer: AllColors.shallowOrange.p90,

  tertiary: AllColors.brightYellow.p80,
  onTertiary: AllColors.brightYellow.p100,
  tertiaryContainer: AllColors.brightYellow.p30,
  onTertiaryContainer: AllColors.brightYellow.p90,

  error: AllColors.error.p80,
  onError: AllColors.error.p20,
  errorContainer: AllColors.error.p30,
  onErrorContainer: AllColors.error.p90,

  background: AllColors.neutral.p20,
  onBackground: AllColors.neutral.p90,
  surface: AllColors.neutral.p10,
  onSurface: AllColors.neutral.p80,

  surfaceVariant: AllColors.neutralVariant.p30,
  onSurfaceVariant: AllColors.neutralVariant.p80,
  outline: AllColors.neutralVariant.p60,

  inverseSurface: AllColors.neutral.p99,
  inverseOnSurface: AllColors.neutral.p10,
};

const MoodFiLightThemeProps: Record<MoodFiThemePattern, string> = {
  background: AllColors.neutral.p95,
  container: AllColors.neutral.p100,
  primary: AllColors.deepYellow.p40,
  inversePrimary: AllColors.deepYellow.p100,
  onError: AllColors.error.p50,

  schemeToggle: AllColors.shallowOrange.p30,

  transparentButtonHover: AllColors.deepYellow.p90,
  transparentButtonClickOrActive: AllColors.deepYellow.p40,
  textInputWebkitShadow: AllColors.deepYellow.p100,

  tableHead: AllColors.deepYellow.p40,
  tableStripe: AllColors.neutral.p95,
  tableHover: AllColors.neutral.p90,

  sandOutlineButtonText: AllColors.brightYellow.p10,
  sandOutlineButtonBGHover: AllColors.brightYellow.p90,

  boxLabelVesselBG: AllColors.deepYellow.p90,
  boxLabelVesselFG: AllColors.deepYellow.p40,
  boxLabelReportBG: AllColors.brightYellow.p80,
  boxLabelReportFG: AllColors.brightYellow.p10,

  vessel: AllColors.deepYellow.p40,
  certificate: AllColors.shallowOrange.p20,
  report: AllColors.brightYellow.p20,
  extension: AllColors.error.p20,
  item: AllColors.neutral.p40,
  action: AllColors.shallowOrange.p30,
};

const MoodFiDarkThemeProps: Record<MoodFiThemePattern, string> = {
  background: AllColors.deepYellow.p20,
  container: AllColors.neutralVariant.p10,
  primary: AllColors.deepYellow.p100,
  inversePrimary: AllColors.deepYellow.p40,
  onError: AllColors.error.p60,

  schemeToggle: AllColors.brightYellow.p30,

  transparentButtonHover: AllColors.deepYellow.p30,
  transparentButtonClickOrActive: AllColors.deepYellow.p40,
  textInputWebkitShadow: AllColors.deepYellow.p30,

  tableHead: AllColors.shallowOrange.p30,
  tableStripe: AllColors.neutral.p10,
  tableHover: AllColors.neutral.p20,

  sandOutlineButtonText: AllColors.brightYellow.p90,
  sandOutlineButtonBGHover: AllColors.brightYellow.p10,

  boxLabelVesselBG: AllColors.deepYellow.p30,
  boxLabelVesselFG: AllColors.deepYellow.p90,
  boxLabelReportBG: AllColors.brightYellow.p10,
  boxLabelReportFG: AllColors.brightYellow.p70,

  vessel: AllColors.deepYellow.p60,
  certificate: AllColors.shallowOrange.p20,
  report: AllColors.brightYellow.p20,
  extension: AllColors.error.p80,
  item: AllColors.neutral.p60,
  action: AllColors.shallowOrange.p60,
};

const defaultTheme: MantineThemeOverride = {
  defaultRadius: "md",
  primaryColor: "blue",
  colors: {
    blue: [
      AllColors.shallowOrange.p95,
      AllColors.shallowOrange.p90,
      AllColors.shallowOrange.p80,
      AllColors.shallowOrange.p70,
      AllColors.shallowOrange.p60,
      AllColors.shallowOrange.p40, // main on light
      AllColors.shallowOrange.p50,
      AllColors.shallowOrange.p20,
      AllColors.shallowOrange.p30, // main on dark
      AllColors.shallowOrange.p10,
    ],
    red: [
      AllColors.error.p95, // 0
      AllColors.error.p90, // 1
      AllColors.error.p80, // 2
      AllColors.error.p70, // 3
      AllColors.error.p40, // 4
      AllColors.error.p60, // error on dark 2
      AllColors.error.p60, // error on dark
      AllColors.error.p50, // error on light
      AllColors.error.p20, // 8
      AllColors.error.p10, // 9
    ],
  },
};

export const lightTheme: MantineThemeOverride = {
  colorScheme: "light",
  other: {
    colors: AllColors,
    theme: MatLightThemeProps,
    moodFiTheme: MoodFiLightThemeProps,
  },
  ...defaultTheme,
};

export const darkTheme: MantineThemeOverride = {
  colorScheme: "dark",
  other: {
    colors: AllColors,
    theme: MatDarkThemeProps,
    moodFiTheme: MoodFiDarkThemeProps,
  },
  ...defaultTheme,
};

type TypographyTypes = "display" | "headline" | "title" | "label" | "body";
type TypographySizes = "small" | "medium" | "large";

type FontStyles = Record<TypographyTypes, Record<TypographySizes, CSSObject>>;

export const fontStyles: FontStyles = {
  display: {
    small: {
      fontSize: 36,
      fontWeight: 400,
      letterSpacing: "0%",
      lineHeight: "44px",
    },
    medium: {
      fontSize: 45,
      fontWeight: 500,
      letterSpacing: "0%",
      lineHeight: "52px",
    },
    large: {
      fontSize: 57,
      fontWeight: 600,
      letterSpacing: "-0.25px",
      lineHeight: "64px",
    },
  },
  headline: {
    small: {
      fontSize: 24,
      fontWeight: 400,
      letterSpacing: "0%",
      lineHeight: "32px",
    },
    medium: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "0%",
      lineHeight: "36px",
    },
    large: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: "0%",
      lineHeight: "40px",
    },
  },
  title: {
    small: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: "0.1px",
      lineHeight: "17px",
    },
    medium: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "0.1px",
      lineHeight: "21px",
    },
    large: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "0%",
      lineHeight: "28px",
    },
  },
  label: {
    small: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.5px",
      lineHeight: "16px",
    },
    medium: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.5px",
      lineHeight: "16px",
    },
    large: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: "0.1px",
      lineHeight: "20px",
    },
  },
  body: {
    small: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: "0.4px",
      lineHeight: "16px",
    },
    medium: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "0.25px",
      lineHeight: "20px",
    },
    large: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "0.5px",
      lineHeight: "24px",
    },
  },
};

export function useWsStyle<Key extends string = string>(
  getCssObj: () => Record<Key, CSSObject>
) {
  return {
    o: getCssObj() as Record<Key, CSSObject>, // Usar com componentes do Mantine
    p: getCssObj() as Record<Key, CSSProperties>, // Usar com elementos HTML puros
  };
}

export interface CustomTheme {
  colors: Record<MoodFiColors, ColorPalette>;
  matTheme: Record<MaterialYouPattern, string>;
  moodFiTheme: Record<MoodFiThemePattern, string>;
}

export const defineCustomTheme: (theme: MantineTheme) => CustomTheme = (
  theme: MantineTheme
) => {
  return {
    colors: theme.other.colors,
    matTheme: theme.other.theme,
    moodFiTheme: theme.other.moodFiTheme,
  };
};

export const mergeStyle = (
  firstStyle: CSSObject | CSSProperties = {},
  secondStyle: CSSObject | CSSProperties = {},
  thirdStyle: CSSObject | CSSProperties = {},
  fourthStyle: CSSObject | CSSProperties = {},
  fifthStyle: CSSObject | CSSProperties = {}
): { o: CSSObject; p: CSSProperties } => {
  return {
    o: {
      ...firstStyle,
      ...secondStyle,
      ...thirdStyle,
      ...fourthStyle,
      ...fifthStyle,
    } as CSSObject,
    p: {
      ...firstStyle,
      ...secondStyle,
      ...thirdStyle,
      ...fourthStyle,
      ...fifthStyle,
    } as CSSProperties,
  };
};
