import { mode } from "@chakra-ui/theme-tools";
import { lighten } from "polished";

export const globalStyles = {
  colors: {
    primary: "#422AFB",
    pirmaryLight: lighten(0.1, "#422AFB"),
    secondary: "#83D9FB",
    secondaryLight: lighten(0.1, "#83D9FB"),
    tertiary: "#22C55F",
    tertiaryLight: lighten(0.1, "#22C55F"),
    bgDefault: "#F5F7FF",
    white: "#FFF",
    black: "#000",
    txtdefault: "#2D3748",
    bgmain: "#e2e8f0",

    brand: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#7551FF",
      500: "#cf134b",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#11047A",
    },
    brandScheme: {
      100: "#E9E3FF",
      200: "#7551FF",
      300: "#7551FF",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    brandTabs: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#422AFB",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    yellow: {
      100: "yellow",
      200: lighten(0.3, "yellow"),
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: "'Noto Sans KR', sans-serif;",
        letterSpacing: "-0.5px",
        color: "#222",
        minwidth: "320px",
        // bg: "url('/pc.png') no-repeat 0 0 / 1790px auto",
      },
      //   "#root": {
      //     opacity: 0.7,
      //   },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: '"Noto Sans KR", "sans-serif"',
      },
      "ul > li": {
        listStyle: "none",
      },
      //   ".chakra-container": {
      //     maxWidth: "calc(1280px + var(--chakra-space-4) * 2) !important",
      //   },
      ".blind": {
        position: "absolute",
        width: 0,
        height: 0,
        margin: -1,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        border: 0,
        lineHeight: 0,
      },
    }),
  },
};
