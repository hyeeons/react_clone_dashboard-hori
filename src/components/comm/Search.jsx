import { Box, Button, ButtonGroup, Input } from "@chakra-ui/react";
import { FaRegBell } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaPalette } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <Box
        bg={"white"}
        display={"flex"}
        sx={{
          width: "354px",
          height: "60px",
          padding: "10px",
          borderRadius: "30px",
        }}
      >
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
        <ButtonGroup>
          <Button variant={"searchicon"}>
            <FaRegBell />
          </Button>
          <Button variant={"searchicon"}>
            <IoInformationCircleOutline />
          </Button>
          <Button variant={"searchicon"}>
            <FaPalette />
          </Button>
          <Button>
            <FaUserCircle />
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Search;
