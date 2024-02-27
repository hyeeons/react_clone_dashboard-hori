import { Button } from "@chakra-ui/react";
import { delay } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { breakpoints } from "../../../theme/foundations/breakpoints";

const MarketCardNft = () => {
  const nftArr = [
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png",
      tit: "Abstract Colors",
      byname: "By Esthera Jackson",
      price: "0.91",
      userA:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png",
      userB:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png",
      userC:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft2.7897c45d2601ee3adfb5.png",
      tit: "ETH AI Brain",
      byname: "By Nick Wilson",
      price: "0.54",
      userA:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png",
      userB:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png",
      userC:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
      tit: "Mesh Gradients",
      byname: "By Will Smith",
      price: "1.57",
      userA:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png",
      userB:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png",
      userC:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft6.9ff5403226e81a6fd390.png",
      tit: "Orange House",
      byname: "By Greet Sally",
      price: "1.57",
      userA:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
      userB:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png",
      userC:
        "https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png",
    },
  ];
  const [likedIcon, setLiked] = useState(Array(nftArr.length).fill(false));

  const likeClick = (index) => {
    const updatedLiked = [...likedIcon];
    updatedLiked[index] = !updatedLiked[index];
    setLiked(updatedLiked);
  };
  return (
    <>
      <SwiperStyle
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1000 }}
      >
        {nftArr.map(
          ({ img, tit, byname, price, userA, userB, userC }, index) => (
            <SwiperSlide key={index}>
              <BoxStyle>
                <div className="imgBox">
                  <img src={img} alt="" />
                  <button className="button" onClick={() => likeClick(index)}>
                    {likedIcon[index] ? (
                      <GoHeartFill
                        style={{ color: "#FF3666" }}
                        className="icon"
                      />
                    ) : (
                      <GoHeart className="icon" />
                    )}
                  </button>
                </div>
                <div className="textGroup">
                  <div className="textBox">
                    <p>{tit}</p>
                    <span>{byname}</span>
                  </div>
                  <div className="group">
                    <span className="length">+5</span>
                    <span>
                      <img src={userA} alt="" />
                    </span>
                    <span>
                      <img src={userB} alt="" />
                    </span>
                    <span>
                      <img src={userC} alt="" />
                    </span>
                  </div>
                </div>
                <div className="info">
                  <p>Current Bid: {price} ETH</p>
                  <a href="">
                    <Button variant="placebid">Place Bid</Button>
                  </a>
                </div>
              </BoxStyle>
            </SwiperSlide>
          )
        )}
      </SwiperStyle>
    </>
  );
};
const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const BoxStyle = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 20px;

  .imgBox {
    width: 100%;
    margin-bottom: 20px;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  .textGroup {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .textBox {
    p {
      font-size: 18px;
      font-weight: 600;
      color: #1b254b;
      margin: 0 14px 5px 0;
    }
    span {
      font-size: 14px;
      font-weight: 500;
      color: #a3aed0;
      margin: 0 14px 0 0;
    }
  }
  .group {
    height: 32px;
    margin-top: 10px;
    margin-right: 10px;
  }
  .info {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    p {
      font-weight: 700;
      font-size: 14px;
      color: #422afb;
    }
  }
  .group {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    span {
      border-radius: 9999px;
      border-width: 2px;
      font-size: 12px;
      background-color: #e2e8f0;
      display: inline-flex;
      justify-content: center;
      margin-inline-end: -0.75rem;
      width: 28px;
      height: 28px;
      position: relative;
      color: #422afb;
      text-align: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 9999px;
      }
    }
  }
  .button {
    width: 36px;
    height: 36px;
    background-color: white;
    position: absolute;
    top: 30px;
    right: 30px;
    border-radius: 9999px;
    padding: 8px;
  }
  .icon {
    width: 22px;
    height: 22px;
  }
  @media (max-width: ${breakpoints["2xl"]}) {
    .textGroup {
      flex-direction: column;
    }
    .info {
      flex-direction: column;
    }
  }
  @media (max-width: ${breakpoints["xl"]}) {
    .textGroup {
      flex-direction: row;
    }
    .info {
      flex-direction: row;
    }
  }
  @media (max-width: ${breakpoints["lg"]}) {
    .textGroup {
      flex-direction: column;
    }
    .info {
      flex-direction: column;
    }
  }
`;

export default MarketCardNft;
