import { Box, Card, Checkbox, Text } from "@chakra-ui/react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";

const Task = () => {
  const taskArr = [
    "Landing Page Design",
    "Dashboard Builder",
    "Mobile App Design",
    "Illustrations",
    "Promotional LP",
  ];
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(taskArr.length).fill(false)
  );
  const titCheckboxChange = () => {
    setIsCheckedAll(!isCheckedAll);
    setCheckboxStates(new Array(taskArr.length).fill(!isCheckedAll));
  };

  const listCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);

    setIsCheckedAll(newCheckboxStates.every((state) => state));
  };

  return (
    <Card p={"20px"}>
      <Box
        marginBottom={"30px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Checkbox
          marginRight={"20px"}
          isChecked={isCheckedAll}
          onChange={titCheckboxChange}
        />
        <Text fontSize={"20px"} fontWeight={700}>
          Tasks
        </Text>
        <HiOutlineDotsHorizontal
          fontSize={"20px"}
          style={{ marginInlineStart: "auto" }}
        />
      </Box>
      {taskArr.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          alignItems={"center"}
          marginBottom={"20px"}
        >
          <Checkbox
            marginRight={"20px"}
            isChecked={checkboxStates[index]}
            onChange={() => listCheckboxChange(index)}
          />
          <Text fontWeight={700}>{item}</Text>
          <PiDotsSixVerticalBold
            fontSize={"20px"}
            style={{ marginInlineStart: "auto" }}
          />
        </Box>
      ))}
    </Card>
  );
};

export default Task;
