import { Box, Container, propNames } from "@chakra-ui/react";

const ContainerSt = (props) => {
  return (
    <Container
      maxW={1280}
      mx={"auto"}
      px={[20, null, 0]}
      height={props.height}
      background={props.background}
    >
      {props.children}
    </Container>
  );
};

export const Section = (props) => {
  return (
    <Box background={props.background} padding={5}>
      {" "}
      {props.children}
    </Box>
  );
};

export default ContainerSt;
