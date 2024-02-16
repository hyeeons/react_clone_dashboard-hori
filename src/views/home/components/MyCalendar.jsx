import { Card } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { styled } from "styled-components";

const MyCalendar = () => {
  const [today, setToday] = useState(new Date());
  const onChangeToday = () => {
    setToday(today);
  };
  return (
    <Card h={96} padding={"20px 15px"}>
      <StyleCalendar locale="en" onChange={onChangeToday} value={today} />
    </Card>
  );
};

export const StyleCalendar = styled(Calendar)`
  background-color: #fff;
  border: none;
  margin: 0 auto;
`;
export default MyCalendar;
