import { mode } from "@chakra-ui/theme-tools";
export const cardStyles = {
  components: {
    Card: {
      baseStyle: {
        container: {
          bg: mode("white", "gray.700"),
          boxShadow: "none",
          borderRadius: "20px",
        },
      },
      // variants: {
      //     primary: (props) => ({}),
      // },
    },
  },
};
