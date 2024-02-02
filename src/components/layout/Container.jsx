import { Box, Container, GlobalStyle, propNames } from "@chakra-ui/react";

const ContainerSt = (props) => {
  return (
    <Container
      maxW={1280}
      mx={"auto"}
      px={[20, null, 0]}
      height={props.height}
      background={props.background}
      display={props.display}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
    >
      {props.children}
    </Container>
  );
};

export const Section = (props) => {
  // 삼항 연산자
  // 조건? 참일 때 : 거짓일 때
  const backgroundColor = props.isLightBackground ? "white" : "gray.100";
  return (
    <Box background={props.background} padding={5} py={"100px"}>
      {" "}
      {props.children}
    </Box>
  );
};

export default ContainerSt;
