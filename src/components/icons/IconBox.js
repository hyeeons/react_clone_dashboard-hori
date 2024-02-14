import { Box } from "@chakra-ui/react";

const IconBox = (props) => {
  const { icon, ...rest } = props;

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"50%"}
      color={"primary"}
      fontSize={"24px"}
      {...rest}
    >
      {icon}
    </Box>
  );
};

export default IconBox;
