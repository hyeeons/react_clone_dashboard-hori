import { mode } from "@chakra-ui/theme-tools";
export const tableStyles = {
  components: {
    Table: {
      baseStyle: {
        thead: {
          th: {
            fontSize: "12px",
            color: "#a0aec0",
          },
        },
        tbody: {
          tr: {
            fontSize: "14px",
            fontWeight: "600",
            _hover: {
              color: mode("primary"),
            },
          },
        },
      },
    },
  },
};
