import { mode } from "@chakra-ui/theme-tools";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";

export const cellIcon = (cellText) => {
  if (cellText === "Approved") {
    return <FaCircleCheck color="#01b574" />;
  } else if (cellText === "Disable") {
    return <FaTimesCircle color="#ee5d50" />;
  } else if (cellText === "Error") {
    return <FaCircleExclamation color="#ffb547" />;
  } else {
    return null;
  }
  //   <Flex alignItems="center" gap={2}>
  //   {/* 조건부 아이콘 Approved, Disable, Error 일 경우 */}
  //   {row.status === 'Approved' && <FaCheck color="green" />}
  //   {row.status === 'Disable' && <FaTimes color="red" />}
  //   {row.status === 'Error' && <FaExclamation color="orange" />}
  //   {row.status}
  // </Flex>
};

export const tableStyles = {
  components: {
    Table: {
      baseStyle: {
        thead: {
          th: {
            fontSize: "12px",
            color: "#a0aec0",
            borderBottom: "1px solid #E2E8F0",
          },
        },
        tbody: {
          tr: {
            // fontSize: "14px",
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
