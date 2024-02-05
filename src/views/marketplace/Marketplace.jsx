import { Box, Img } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import ContainerSt from "../../components/layout/Container";
import topImg from "../../assets/images/market_image.avif";

const Marketplace = () => {
  const boxStyle = {
    width: "200px",
    height: "200px",
    background: "yellowgreen",
    borderRadius: "50%",
    margin: "3000px 0",
  };
  return (
    <Layout title="marketplace" showTitle={false}>
      <Box
        className="top-cont"
        h={"523px"}
        bg={`url(${topImg}) no-repeat 50% / cover`}
      ></Box>

      <div>마켓플레이스 컨텐츠 - mottion 활용</div>
      <motion.div
        style={boxStyle}
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: 1,
          x: "100px",
          scale: 1.3,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </Layout>
  );
};

export default Marketplace;
