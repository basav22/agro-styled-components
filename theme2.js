const COLORS = {
  danger: "#D50000",
  dangerBg: "#f6ccd1",
  primary: "#127B02",
  primaryBg: "#adb",
  transparent: "#fff",
  faded: "#f1f1f1",
  base: "#fff"
};

export const COLORS_CONST = COLORS;

export const theme = {
  body: {
    bgColor: "#666",
    fonts: {
      xs: "0.72em",
      sm: "0.85em",
      default: "1em",
      md: "1.14em",
      lg: "1.28em",
      xl: "1.7em",
      xxl: "2em"
    }
  },
  colors: COLORS,
  buttons: {
    default: {
      btnBg: "#fff",
      btnColor: "#333",
      btnBgHover: "#999"
    },
    primary: {
      btnBg: COLORS.primary,
      btnColor: "#FFF",
      btnBgHover: "#2FB43F"
    },
    success: {
      btnBg: COLORS.primary,
      btnColor: "#FFF",
      btnBgHover: "#2FB43F"
    }
  },
  label: {
    default: {
      color: "#000000"
    },
    error: {
      color: COLORS.danger
    },
    warning: {
      color: "#FFD05B"
    },
    info: {
      color: "#fff"
    },
    fainted: {
      color: "#999999"
    },
    primary: {
      color: COLORS.primary
    }
  },
  input: {
    default: {
      borderColor: "#666666"
    },
    error: {
      borderColor: COLORS.danger
    },
    focus: {
      borderColor: "#007b00"
    }
  }
};
