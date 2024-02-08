import { Box, Link, Flex, Icon, LinkBox, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useState } from "react";

const Gnb = () => {
  const [isSelected, setIsSelected] = useState(0);
  const MenuArr = [
    { path: "/", icon: <FaHome />, value: "Main Dashboard" },
    { path: "/marketplace", icon: <IoCartSharp />, value: "NFT Marketplace" },
    {
      path: "/datatables",
      icon: <BsFillFileBarGraphFill />,
      value: "Data Tables",
    },
    { path: "/profile", icon: <FaUser />, value: "Profile" },
    { path: "/signin", icon: <FaUnlockAlt />, value: "Sign In" },
    { path: "/rtladmin", icon: <RiAdminFill />, value: "RTL Admin" },
  ];

  return (
    <Box
      className="maenuWrap"
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      mt={9}
      ml={5}
    >
      {MenuArr.map((item, index) => (
        <Box key={index}>
          <Link
            as={ReactRouterLink}
            to={item.path}
            display={"flex"}
            gap={5}
            alignItems={"center"}
            cursor={"pointer"}
            onClick={() => {
              setIsSelected(index);
            }}
          >
            <Box
              color={
                isSelected === index ? "brandTabs.500" : "secondaryGray.500"
              }
            >
              {item.icon}
            </Box>

            <Text
              color={isSelected === index ? "txtdefault" : "secondaryGray.500"}
              fontWeight={isSelected === index ? "600" : "normal"}
            >
              {item.value}
            </Text>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Gnb;
