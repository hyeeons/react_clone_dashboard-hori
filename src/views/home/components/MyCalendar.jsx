import { Card, CardHeader } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../../assets/css/MiniCalendar.css";

const MyCalendar = () => {
  const [today, setToday] = useState(new Date());
  const onChangeToday = () => {
    setToday(today);
  };
  return (
    <Card h={96} padding={"20px 15px"}>
      <Calendar locale="en" onChange={onChangeToday} value={today} />
    </Card>
  );
};

// export const StyleCalendar = styled(Calendar)`
//   background-color: #fff;
//   border: none;
//   margin: 0 auto;
// `;
export default MyCalendar;
