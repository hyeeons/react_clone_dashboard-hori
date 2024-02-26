import { Button } from "@chakra-ui/react";
import { delay } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const MarketCardNft = () => {
  const nftArr = [
    {
      img: "https://images.unsplash.com/photo-1648019719755-4c0f66bfdf25?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      img: "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      img: "https://images.unsplash.com/photo-1706273931431-258a85d666c4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      img: "https://plus.unsplash.com/premium_photo-1694030762717-33e86020e461?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        autoplay={{ delay: 3000 }}
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
  height: 386px;
`;

const BoxStyle = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  .imgBox {
    width: 100%;
    height: 132.28px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
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
  }
  .info {
    margin-top: 25px;

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
`;

export default MarketCardNft;
// FF3666
