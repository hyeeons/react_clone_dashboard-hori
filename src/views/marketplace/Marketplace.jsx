import { Box, Card, SimpleGrid, VStack } from "@chakra-ui/react";
import History from "../../components/layout/History";
import Banner from "./components/Banner";
import styled from "styled-components";
import MarketCardNft from "./components/MarketCard";

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
          <Card>
            <Banner />
          </Card>
          <Card bg={"none"}>
            <TextBox>
              <h2>Trending NFTs</h2>
              <ul style={{ display: "flex" }}>
                <li>Art</li>
                <li>Music</li>
                <li>Collectibles</li>
                <li>Sports</li>
              </ul>
            </TextBox>
            <MarketCardNft />
          </Card>
          <Card bg={"none"}>
            <TextBox2>
              <h2>Recently Added</h2>
              <MarketCardNft />
            </TextBox2>
          </Card>
        </SimpleGrid>
        <SimpleGrid spacing={"20px"}>
          <Card minW={{ xl: "406px" }} bg={"lightgreen"}>
            box
          </Card>
          <Card minW={{ xl: "406px" }} bg={"lightgreen"}>
            box
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};

const TextBox = styled.div`
  margin-top: 45px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  li {
    color: #422afb;
    margin: 0 20px 0 0;
  }
`;

const TextBox2 = styled(TextBox)`
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
  }
`;
export default Marketplace;
