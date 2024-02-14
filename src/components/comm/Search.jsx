import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaRegBell } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaPalette } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <>
      <Flex
        bg={"white"}
        display={"flex"}
        h={61}
        mt={{ sm: 2, md: 0 }}
        px={2}
        borderRadius={30}
        alignItems={"center"}
      >
        <InputGroup w={"50%"}>
          <Input
            variant="unstyled"
            placeholder="Search..."
            bg={"secondaryGray.300"}
            size={"sm"}
            sx={{
              width: "auto",
              height: "40px",
              padding: "11px 16px 11px 40px",
              borderRadius: "30px",
            }}
          />
          <InputLeftElement
            top={"50%"}
            transform={"translateY(-50%)"}
            fontSize={20}
          >
            <FiSearch />
          </InputLeftElement>
        </InputGroup>
        <ButtonGroup alignItems={"center"} w={"42%"}>
          <Button variant={"searchicon"}>
            <FaRegBell />
            {/* <span className="blind">알림</span> */}
          </Button>
          <Button variant={"searchicon"}>
            <IoInformationCircleOutline />
          </Button>
          <Button variant={"searchicon"}>
            <FaPalette />
          </Button>
          <Button variant={"searchicon"} w={60}>
            <FaUserCircle
              width={40}
              height={40}
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Search;
