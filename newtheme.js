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
    "theme.fonts.size.xll": "2em", // Labels
    "theme.label.primary.color": COLORS.primary,
    "theme.label.warning.color": "#FFD05B",
    "theme.label.error.color": COLORS.danger,
    "theme.label.info.color": "#ccc",
    "theme.label.default.color": "#000", // Buttons
    "theme.button.default.color": "#000",
    "theme.button.default.bgColor": "#666",
    "theme.button.default.bgHover": "#999",
    "theme.button.primary.color": "#FFF",
    "theme.button.primary.bgColor": COLORS.primary,
    "theme.button.primary.bgHover": "#2FB43F",
    "theme.button.error.color": COLORS.danger,
    "theme.button.error.bgColor": COLORS.dangerBg,
    "theme.button.error.bgHover": COLORS.dangerBg
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
    default: { 
      btnBg: config["theme.button.default.bgColor"],
      btnColor: config["theme.button.primary.color"],
      btnBgHover: config["theme.button.primary.bgHover"],
    },
    primary: {
      btnBg: config["theme.button.primary.bgColor"],
      btnColor: config["theme.button.primary.color"],
      btnBgHover: config["theme.button.primary.bgHover"],
      btnDisabled: COLORS.primaryDisabled
    },
    success: { 
      btnBg: config["theme.button.primary.bgColor"],
      btnColor: config["theme.button.primary.color"],
      btnBgHover: config["theme.button.primary.bgHover"],
    },
    error: {
      btnBg: config["theme.button.error.bgColor"],
      btnColor: config["theme.button.error.color"],
      btnBgHover: config["theme.button.error.bgHover"],
    }
  },
  label: {
    default: { color: config["theme.label.default.color"] },
    error: { color: config["theme.label.error.color"] },
    warning: { color: config["theme.label.warning.color"] },
    info: { color: config["theme.label.info.color"] },
    fainted: { color: COLORS.faded },
    primary: { color: config["theme.label.primary.color"] },
    update: { color: "#007ec1" }
  },
  input: {
    default: { borderColor: "#666666" },
    error: { borderColor: COLORS.danger },
    focus: { borderColor: "#007b00" }
  }
});

// export default theme;
