import { Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  // URL 경로를 '/' 기준으로 분리하여 배열로 변환
  // 예를 들어, /about/company 라는 경로는 ['about', 'company']로 변환
  // 빈 문자열을 제거하기 위해 filter(Boolean)를 사용
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // 경로의 마지막 부분을 타이틀로 사용
  // 예를 들어, /about/company 경로는 'company'를 타이틀로 사용
  // 경로가 없는 경우 'Home'을 타이틀로 사용
  const pageTitle =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "Home";
  // 문자열의 첫 글자를 대문자로 변환하여 보기 좋게 만듦
  // 예를 들어, 'about'은 'About'으로 변환
  const formattedTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

  return <Heading fontSize={32}>{formattedTitle}</Heading>;
};

export default DynamicTitle;
