import { Box, Flex, Icon, LinkBox } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useState } from "react";

const MenuList = () => {
  const [isSelected, setIsSelected] = useState(0);
  const MenuArr = [
    { link: "/", icon: <FaHome />, value: "Main Dashboard" },
    { link: "/marketplace", icon: <IoCartSharp />, value: "NFT Marketplace" },
    {
      link: "/datatables",
      icon: <BsFillFileBarGraphFill />,
      value: "Data Tables",
    },
    { link: "/profile", icon: <FaUser />, value: "Profile" },
    { link: "/signin", icon: <FaUnlockAlt />, value: "Sign In" },
    { link: "/rtladmin", icon: <RiAdminFill />, value: "RTL Admin" },
  ];

  return (
    <Box
      className="maenuWrap"
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      mt={8}
      ml={5}
    >
      {MenuArr.map((item, index) => (
        <Box key={index}>
          <Link to={item.link}>
            <Box
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
                // fontWeight={isSelected === index ? "800" : "normal"}
              >
                {item.icon}
              </Box>
              <Box
                color={
                  isSelected === index ? "txtdefault" : "secondaryGray.500"
                }
                fontWeight={isSelected === index ? "600" : "normal"}
              >
                {item.value}
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default MenuList;
