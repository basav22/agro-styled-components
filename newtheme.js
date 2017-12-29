const COLORS = {
  danger: "#D50000",
  dangerBg: "#f6ccd1",
  primary: "#127B02",
  primaryDisabled: "#70b167",
  primaryBg: "#adb",
  transparent: "#fff",
  faded: "#ccc",
  base: "#000"
};

export const COLORS_CONST = COLORS;

export function applyTheme(configString = {}) {
  let STYLISH_CONFIG = {
    "theme.fonts.size.default": "1em",
    "theme.fonts.size.xs": ".72em",
    "theme.fonts.size.sm": ".85em",
    "theme.fonts.size.md": "1.14em",
    "theme.fonts.size.lg": "1.28em",
    "theme.fonts.size.xl": "1.7em",
    "theme.fonts.size.xll": "2em"
  };

  STYLISH_CONFIG = Object.assign({}, STYLISH_CONFIG, configString);
  return getTheme(STYLISH_CONFIG);
}

export const getTheme = config => ({
  body: {
    bgColor: "#e6e9ed",
    fonts: {
      default: config["theme.fonts.size.default"],
      xs: config["theme.fonts.size.xs"],
      sm: config["theme.fonts.size.sm"],
      md: config["theme.fonts.size.md"],
      lg: config["theme.fonts.size.lg"],
      xl: config["theme.fonts.size.xl"],
      xxl: config["theme.fonts.size.xll"]
    }
  },
  colors: COLORS,
  buttons: {
    default: { btnBg: "#666", btnColor: "#000", btnBgHover: "#999" },
    primary: {
      btnBg: COLORS.primary,
      btnColor: "#FFF",
      btnBgHover: "#2FB43F",
      btnDisabled: COLORS.primaryDisabled
    },
    success: { btnBg: COLORS.primary, btnColor: "#FFF", btnBgHover: "#2FB43F" },
    error: {
      btnBg: COLORS.danger,
      btnColor: COLORS.dangerBg,
      btnBgHover: COLORS.dangerBg
    }
  },
  label: {
    default: { color: "#000000" },
    error: { color: COLORS.danger },
    warning: { color: "#FFD05B" },
    info: { color: "#666666" },
    fainted: { color: COLORS.faded },
    primary: { color: COLORS.primary },
    update: { color: "#007ec1" }
  },
  input: {
    default: { borderColor: "#666666" },
    error: { borderColor: COLORS.danger },
    focus: { borderColor: "#007b00" }
  }
});

// export default theme;
