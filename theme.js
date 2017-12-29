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

export const theme = {
  body: {
    bgColor: "#e6e9ed",
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
      btnBg: "#666",
      btnColor: "#000",
      btnBgHover: "#999"
    },
    primary: {
      btnBg: COLORS.primary,
      btnColor: "#FFF",
      btnBgHover: "#2FB43F",
      btnDisabled: COLORS.primaryDisabled
    },
    success: {
      btnBg: COLORS.primary,
      btnColor: "#FFF",
      btnBgHover: "#2FB43F"
    },
    error: {
      btnBg: COLORS.danger,
      btnColor: COLORS.dangerBg,
      btnBgHover: COLORS.dangerBg
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
      color: "#666666"
    },
    fainted: {
      color: COLORS.faded
    },
    primary: {
      color: COLORS.primary
    },
    update: {
      color: "#007ec1"
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
