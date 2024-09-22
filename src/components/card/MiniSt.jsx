import {
  Box,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { MdOutlineBarChart } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";


const MiniSt = () => {
  const MiniStArr = [
    { icon: <MdOutlineBarChart />, text: "Earnings", value: "$350.4" },
    { icon: <FaDollarSign />, text: "Spend this month", value: "$642.39" },
    { icon: <BsDatabaseFillCheck />, text: "Sales", value: "$574.34" },
    { icon: <FaCoins />, text: "Your balance", value: "$1,000" },
    { icon: <LuCheckCircle />, text: "New Tasks", value: "154" },
    { icon: <MdOutlineBarChart />, text: "Total Projects", value: "2935" },
	
  ];
  return (
    <>
      {MiniStArr.map(({ icon, text, value }, index) => (
        <Box
          key={index}
          h={"98px"}
          bg={"white"}
          borderRadius={20}
          padding={"15px 20px"}
        >
          <Stat>
            <Flex alignItems={"center"} gap={18}>
              <Box
                bg={"secondaryGray.300"}
                w={"56px"}
                h={"56px"}
                padding={"5%"}
                borderRadius={"50%"}
                fontSize={"30px"}
                color={"brandTabs.500"}
              >
                {icon}
              </Box>
              <Box>
                <StatLabel
                  lineHeight={"15px"}
                  margin={0}
                  color={"secondaryGray.600"}
                  fontSize={"14px"}
                >
                  {text}
                </StatLabel>
                <StatNumber fontSize={"24px"} color={"secondaryGray.900"}>
                  {value}
                </StatNumber>
              </Box>
            </Flex>
          </Stat>
        </Box>
      ))}
    </>
  );
};

export default MiniSt;
