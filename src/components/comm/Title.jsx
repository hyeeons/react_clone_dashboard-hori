import { Heading } from "@chakra-ui/react";

const Title = (props) => {
  return (
    <Heading as="h3" fontSize={20} color={"black"} my={5}>
      {props.children}
    </Heading>
  );
};

export const SubTitle = (props) => {
  return (
    <Heading as="h4" fontSize={15} color={"gray"} my={5}>
      {props.children}
    </Heading>
  );
};
export default Title;
// export { SubTitle };
