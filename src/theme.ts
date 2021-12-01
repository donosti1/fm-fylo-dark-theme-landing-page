import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
        backgroundColor: "secondary.700",
      },
    },
  },
  colors: {
    primary: {
      300: "hsl(176, 68%, 64%)",
      400: "hsl(198, 60%, 50%)",
      500: "hsl(0, 100%, 63%)",
    },
    secondary: {
      400: "hsl(219, 30%, 18%)",
      500: "hsl(217, 28%, 15%)",
      700: "hsl(218, 28%, 13%)",
      900: "hsl(216, 53%, 9%)",
    },
  },
  sizes: {
    container: {
      sm: "375px",
      md: "640px",
      xl: "1120px",
    },
  },
  fonts: {
    body: "Open Sans",
    heading: "Raleway",
    Menu: "Open Sans",
  },
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            bg: "white",
            color: "black",
            borderRadius: "full",
            fontSize: ["xs", "inherit"],
            _focus: {
              bg: "white",
            },
          },
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontFamily: "Open Sans",
        fontWeight: "400",
        height: 12,
      },
      variants: {
        "footer-link": {
          bg: "transparent",
          color: "white",
          h: 8,
          _hover: {
            fontWeight: "700",
          },
        },
        "header-link": {
          bg: "transparent",
          color: "white",
          fontFamily: "Raleway",
          fontSize: ["sm", "lg"],
          paddingInlineStart: [0, "inherit"],
          paddingInlineEnd: [0, "inherit"],
          w: ["auto", 20],
          _hover: {
            textDecoration: "underline",
            fontWeight: "700",
          },
        },

        solid: {
          bg: "primary.400",
          color: "white",
          fontFamily: "Raleway",
          fontSize: "sm",
          fontWeight: "700",
          w: "auto",
          px: [12],
          _hover: {
            bg: "primary.300",
            color: "white",
          },
        },
      },
      sizes: {
        lg: {
          h: 14,
          minW: 12,
          fontSize: "lg",
          px: 10,
        },
      },
    },
  },
});
