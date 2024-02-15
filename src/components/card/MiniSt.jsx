import {
  Box,
  Card,
  CardBody,
  Flex,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

import { MdBarChart } from "react-icons/md";

const MiniSt = (props) => {
  const { name, value, startContent, endContent, growth } = props;

  return (
    <Card h={116}>
      <CardBody py={15} display={"flex"} alignItems={"center"}>
        {startContent}
        <Stat ml={startContent ? 5 : 0}>
          <StatLabel>{name}</StatLabel>
          <StatNumber>{value}</StatNumber>
          {growth ? <StatHelpText>{growth}adsd </StatHelpText> : null}
        </Stat>
        <Spacer />
        {endContent}
      </CardBody>
    </Card>
  );
};

export default MiniSt;
