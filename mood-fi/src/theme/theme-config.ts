import { CSSProperties, Key } from "react";

import { CSSObject, MantineTheme, MantineThemeOverride } from "@mantine/core";

type MoodFiColors =
  | "primaryYellow"
  | "secondaryPurple"
  | "tertiaryGreen"
  | "error"
  | "neutral";

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
  | "menuBackground"
  | "onBackgroundMenu"
  | "onBackgroundMenuText"
  | "pageBackground"
  | "onBackgroundPage"
  | "onBackgroundPageText"
  | "primary"
  | "onPrimaryText"
  | "sliderFilled"
  | "sliderTrack";

type ColorShades =
  | "p0"
  | "p5"
  | "p10"
  | "p15"
  | "p20"
  | "p25"
  | "p30"
  | "p35"
  | "p40"
  | "p45"
  | "p50"
  | "p55"
  | "p60"
  | "p65"
  | "p70"
  | "p75"
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
  primaryYellow: {
    p0: "#000000",
    p5: "#1a1400",
    p10: "#332900",
    p15: "#4d3d00",
    p20: "#665200",
    p25: "#806600",
    p30: "#997a00",
    p35: "#b38f00",
    p40: "#cca300",
    p45: "#e6b800",
    p50: "#ffd201",
    p55: "#ffd633",
    p60: "#ffdb4d",
    p65: "#ffe066",
    p70: "#ffe680",
    p75: "#ffeb99",
    p80: "#fff0b3",
    p90: "#fff5cc",
    p95: "#fffae5",
    p99: "#fffdf5",
    p100: "#ffffff",
  },
  secondaryPurple: {
    p0: "#000000",
    p5: "#0a001a",
    p10: "#140033",
    p15: "#1f004d",
    p20: "#290066",
    p25: "#330080",
    p30: "#3d0099",
    p35: "#4700b3",
    p40: "#5200cc",
    p45: "#5c00e6",
    p50: "#7301fe",
    p55: "#8533ff",
    p60: "#944dff",
    p65: "#a366ff",
    p70: "#b380ff",
    p75: "#c299ff",
    p80: "#d2b3ff",
    p90: "#e1ccff",
    p95: "#f0e5ff",
    p99: "#f9f5ff",
    p100: "#ffffff",
  },
  tertiaryGreen: {
    p0: "#000000",
    p5: "#0d1a00",
    p10: "#1a3300",
    p15: "#284d00",
    p20: "#356600",
    p25: "#428000",
    p30: "#4f9900",
    p35: "#5cb300",
    p40: "#69cc00",
    p45: "#77e600",
    p50: "#8bfe01",
    p55: "#9cff33",
    p60: "#a9ff4d",
    p65: "#b5ff66",
    p70: "#c1ff80",
    p75: "#ceff99",
    p80: "#daffb3",
    p90: "#e6ffcc",
    p95: "#f2ffe5",
    p99: "#fafff5",
    p100: "#ffffff",
  },
  error: {
    p0: "#000000",
    p5: "#160303",
    p10: "#2d0606",
    p15: "#430909",
    p20: "#5a0c0c",
    p25: "#700f0f",
    p30: "#871212",
    p35: "#9d1515",
    p40: "#ba1a1a",
    p45: "#ca1c1c",
    p50: "#e01f1f",
    p55: "#e74b4b",
    p60: "#ea6262",
    p65: "#ed7878",
    p70: "#f08f8f",
    p75: "#f3a5a5",
    p80: "#f6bcbc",
    p90: "#f9d2d2",
    p95: "#fce8e8",
    p99: "#fef6f6",
    p100: "#ffffff",
  },
  neutral: {
    p0: "#000000",
    p5: "#090b10",
    p10: "#121621",
    p15: "#1b2131",
    p20: "#242e42",
    p25: "#2d3752",
    p30: "#364263",
    p35: "#3f4d73",
    p40: "#485884",
    p45: "#516394",
    p50: "#5b6ea4",
    p55: "#7b8bb7",
    p60: "#8c9ac0",
    p65: "#9ca8c9",
    p70: "#adb7d2",
    p75: "#bdc5db",
    p80: "#ced4e4",
    p90: "#dee2ed",
    p95: "#eff1f6",
    p99: "#f8f9fb",
    p100: "#ffffff",
  },
};

const MatLightThemeProps = {
  primary: AllColors.primaryYellow.p40,
  onPrimary: AllColors.primaryYellow.p100,
  primaryContainer: AllColors.primaryYellow.p90,
  onPrimaryContainer: AllColors.primaryYellow.p10,

  secondary: AllColors.secondaryPurple.p40,
  onSecondary: AllColors.secondaryPurple.p100,
  secondaryContainer: AllColors.secondaryPurple.p90,
  onSecondaryContainer: AllColors.secondaryPurple.p10,

  tertiary: AllColors.tertiaryGreen.p40,
  onTertiary: AllColors.tertiaryGreen.p100,
  tertiaryContainer: AllColors.tertiaryGreen.p90,
  onTertiaryContainer: AllColors.tertiaryGreen.p10,

  error: AllColors.error.p40,
  onError: AllColors.error.p100,
  errorContainer: AllColors.error.p90,
  onErrorContainer: AllColors.error.p10,

  background: AllColors.neutral.p99,
  onBackground: AllColors.neutral.p10,
  surface: AllColors.neutral.p99,
  onSurface: AllColors.neutral.p10,

  surfaceVariant: AllColors.neutral.p90,
  onSurfaceVariant: AllColors.neutral.p30,
  outline: AllColors.neutral.p50,

  inverseSurface: AllColors.neutral.p10,
  inverseOnSurface: AllColors.neutral.p80,
};

const MatDarkThemeProps = {
  primary: AllColors.primaryYellow.p80,
  onPrimary: AllColors.primaryYellow.p20,
  primaryContainer: AllColors.primaryYellow.p30,
  onPrimaryContainer: AllColors.primaryYellow.p90,

  secondary: AllColors.secondaryPurple.p80,
  onSecondary: AllColors.secondaryPurple.p20,
  secondaryContainer: AllColors.secondaryPurple.p30,
  onSecondaryContainer: AllColors.secondaryPurple.p90,

  tertiary: AllColors.tertiaryGreen.p80,
  onTertiary: AllColors.tertiaryGreen.p100,
  tertiaryContainer: AllColors.tertiaryGreen.p30,
  onTertiaryContainer: AllColors.tertiaryGreen.p90,

  error: AllColors.error.p80,
  onError: AllColors.error.p20,
  errorContainer: AllColors.error.p30,
  onErrorContainer: AllColors.error.p90,

  background: AllColors.neutral.p20,
  onBackground: AllColors.neutral.p90,
  surface: AllColors.neutral.p10,
  onSurface: AllColors.neutral.p80,

  surfaceVariant: AllColors.neutral.p30,
  onSurfaceVariant: AllColors.neutral.p80,
  outline: AllColors.neutral.p60,

  inverseSurface: AllColors.neutral.p99,
  inverseOnSurface: AllColors.neutral.p10,
};

const MoodFiLightThemeProps: Record<MoodFiThemePattern, string> = {
  primary: AllColors.primaryYellow.p95,
  onPrimaryText: AllColors.primaryYellow.p50,

  sliderFilled: AllColors.neutral.p30,
  sliderTrack: AllColors.neutral.p90,

  // appHeader: "rgba(246, 240, 231, 0.6)",

  menuBackground: AllColors.neutral.p90,
  onBackgroundMenu: AllColors.neutral.p99,
  onBackgroundMenuText: AllColors.neutral.p10,

  pageBackground: AllColors.neutral.p100,
  onBackgroundPage: AllColors.neutral.p90,
  onBackgroundPageText: AllColors.secondaryPurple.p60,
};

const MoodFiDarkThemeProps: Record<MoodFiThemePattern, string> = {
  primary: AllColors.primaryYellow.p50,
  onPrimaryText: AllColors.primaryYellow.p95,

  sliderFilled: AllColors.neutral.p90,
  sliderTrack: AllColors.neutral.p30,

  // appHeader: "rgba(30, 27, 22, 0.6)",

  menuBackground: AllColors.neutral.p10,
  onBackgroundMenu: AllColors.neutral.p20,
  onBackgroundMenuText: AllColors.neutral.p90,

  pageBackground: AllColors.neutral.p15,
  onBackgroundPage: AllColors.neutral.p10,
  onBackgroundPageText: AllColors.tertiaryGreen.p90,
};

const defaultTheme: MantineThemeOverride = {
  defaultRadius: "md",
  primaryColor: "blue",
  colors: {
    blue: [
      AllColors.secondaryPurple.p95,
      AllColors.secondaryPurple.p90,
      AllColors.secondaryPurple.p80,
      AllColors.secondaryPurple.p70,
      AllColors.secondaryPurple.p60,
      AllColors.secondaryPurple.p40, // main on light
      AllColors.secondaryPurple.p50,
      AllColors.secondaryPurple.p20,
      AllColors.secondaryPurple.p30, // main on dark
      AllColors.secondaryPurple.p10,
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
  // ...defaultTheme,
};

export const darkTheme: MantineThemeOverride = {
  colorScheme: "dark",
  other: {
    colors: AllColors,
    theme: MatDarkThemeProps,
    moodFiTheme: MoodFiDarkThemeProps,
  },
  // ...defaultTheme,
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

export function useMoodFiStyle<Key extends string = string>(
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
