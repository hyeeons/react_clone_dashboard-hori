import { Box, Card, SimpleGrid, VStack } from "@chakra-ui/react";
import History from "../../components/layout/History";
import Banner from "./components/Banner";

const Marketplace = () => {
  return (
    <>
      <SimpleGrid
        columns={{ xl: 2 }}
        spacing={"20px"}
        w={"100%"}
        templateColumns={{ xl: "2.5fr 0.5fr" }}
      >
        <SimpleGrid spacing={"20px"}>
          <Card bg={"lightblue"}>
            <Banner />
          </Card>
          <Card bg={"lightblue"}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            deleniti aliquam dignissimos, architecto praesentium illum vitae
            nesciunt aspernatur iure delectus vel neque sequi quae ipsam natus
            eligendi beatae laboriosam dolorum?{" "}
          </Card>
          <Card bg={"lightblue"}>box</Card>
        </SimpleGrid>
        <SimpleGrid spacing={"20px"}>
          <Card minW={{ xl: "406px" }} h={"466px"} bg={"lightgreen"}>
            box
          </Card>
          <Card minW={{ xl: "406px" }} h={"724px"} bg={"lightgreen"}>
            box
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};

export default Marketplace;
