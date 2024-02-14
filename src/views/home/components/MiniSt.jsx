import { Box, Card, CardBody, Flex, Spacer, Text } from "@chakra-ui/react";
import { MdBarChart } from "react-icons/md";

const MiniSt = () => {
  return (
    <Card>
      <CardBody>
        <Flex>
          <Box
            w={"56px"}
            h={"56px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            color={"primary"}
            fontSize={"24px"}
            bg={"bgDefault"}
          >
            <MdBarChart />
          </Box>
          <Box></Box>
          <Spacer />
          <Box p="4" bg="green.400">
            Box 2
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniSt;
