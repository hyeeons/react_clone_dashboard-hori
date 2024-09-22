# Horizon-UI Dashboard 클론코딩
<br>

## 🙌 프로젝트 소개
Horizon UI Dashboard 클론코딩 👉[  보러가기 ](https://hyeeons.github.io/react_clone_dashboard-hori/) <br><br>
React 학습을 진행하며 작업했던 Dashboard 클론코딩사이트입니다. <br>
Chakra UI 라이브러리를 활용하여 작업을 진행중입니다.
<br><br>

### 🛠 활용기술
- React
- HTML & SCSS
- Javascripts
- Chakra UI 라이브러리
<br>

#### 💻 원본 사이트 

클론코딩 원본 사이트 Horizon UI Dashboard 👉[  보러가기 ](https://horizon-ui.com/horizon-ui-chakra/#/admin/default) 
<br><br>

### 📌 Main Dashboard의 Task 부분 체크박스 기능
메인 화면에서 Task 부분을 보면 체크박스가 있다. 원래 사이트에서는 각각 항목에 대한 체크박스 기능이 가능하고 제일 상단에 있는 Task 체크박스를 클릭할 수 없게 되어 있었다. 그래서 나는 **개별적인 체크박스 기능을 구현**하면서 **제일 상단의 Task을 체크하면 하위의 항목 전체가 체크되고 다시한번 체크하면 하위 항목 전체가 체크가 해제되게** 하고 싶었다. 이를 위해서 함수형 컴포넌트에서 상태를 관리할 수 있는 useState 훅을  활용했다.

 *아래 코드보기에서 번호에 해당하는 코드 확인가능* <br><br>


#### ✔️ 1. 각 항목의 체크박스 만들기 <br>

1-1) Task에 들어갈 항목을 배열로 만들어준다. <br>
1-2) 배열을 map 함수를 활용하여 항목으로 만들어준다 <br>
    배열을 사용하게 되면 항목을 추가하고 삭제하는데 간편하다. <br>
1-3) useState 훅을 활용하여 체크박스를 생성하고 상태를 저장한다 <br>
1-4) 체크박스를 개별적으로 클릭했을 때 발생하는 기능을 함수로 만들어준다. (listCheckboxChange 함수) <br>
1-5) 위에서 저장해놓은 체크박스의 상태를 return에 있는 체크박스에 isChecked 상태값을 전달한다.<br>
1-6) onChange 이벤트가 발생할 때 listCheckboxChange가 실행되게 하여 체크박스 기능을 적용한다 <br>


#### ✔️ 2. 타이틀의 체크박스를 클릭했을 때 하위 항목도 한 번에 클릭/해제되게 하기 <br>

2-1) useState를 활용하여 체크박스를 한 번에 설정할 수 있는 함수를 생성하고 상태값을 저장한다. <br>
2-2) Task(타이틀)의 체크박스를 클릭했을 때 하위 항목들도 체크하는 함수를 생성한다 (titCheckboxChange) <br>
2-3) 타이틀의 체크박스에 상태값 isCheckedAll을 전달한다. <br>
2-4) 타이틀의 체크박스에 onChange 이벤트 발생할 때 titCheckboxChange 함수가 실행되게 하여 하위 항목들의 체크박스도 제어한다. <br>

<details><summary> 코드보기
</summary>

```
import { Box, Card, Checkbox, Text } from "@chakra-ui/react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";

const Task = () => {
  const taskArr = [
    "Landing Page Design",
    "Dashboard Builder",
    "Mobile App Design",
    "Illustrations",
    "Promotional LP",
  ]; //1-1) Task 항목을 배열로 만들어준다.

  const [isCheckedAll, setIsCheckedAll] = useState(false);
    // 2-1) useState를 활용하여 전체 체크박스를 한 번에 설정할 수 있는 상태값을 저장한다.
    // isCheckedAll은 체크박스의 상태를 저장하고 setIsCheckedAll는 전체 체크박스 상태를 변경해주는 함수이다. 

  const [checkboxStates, setCheckboxStates] = useState(
    new Array(taskArr.length).fill(false)
  ); // 1-3) 항목에 들어갈 체크박스를 배열의 길이만큼 생성하고 기본값은 해제되어 있도록 만들어준다.
    // 여기서 checkboxStates는 체크박스의 상태를 저장하고 setCheckboxStates는 체크박스의 상태를 변경해주는 함수이다.

  const titCheckboxChange = () => {
    setIsCheckedAll(!isCheckedAll);
    setCheckboxStates(new Array(taskArr.length).fill(!isCheckedAll));
  }; // 2-2) Task 타이틀을 클릭했을 때 하위 항목들도 함께 체크될 수 있도록 함수를 만들어준다.

  const listCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
    // 1-4) 체크박스를 했을 때 해당 index값을 전달받고 이 순서에 해당하는 체크박스는 부정연산자를 활용하여 반대로 만들어주는 함수를 생성한다.
    // 예를들어 체크되어있다면 -> 해제 / 해제되어있다면 -> 체크
    setIsCheckedAll(newCheckboxStates.every((state) => state));
  };  

  return (
    <Card p={"20px"}>
      <Box
        marginBottom={"30px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Checkbox
          marginRight={"20px"}
          isChecked={isCheckedAll}
          onChange={titCheckboxChange}
        />
        // 2-3) 제목이 되는 부분의 체크박스에 정보를 전달한다. (isChecked={isCheckedAll)
            2-4) onChange 이벤트가 발생했을 때 titCheckboxChange 함수를 실행하도록 한다.

        <Text fontSize={"20px"} fontWeight={700}>
          Tasks
        </Text>
        <HiOutlineDotsHorizontal
          fontSize={"20px"}
          style={{ marginInlineStart: "auto" }}
        />
      </Box>
      
      {taskArr.map((item, index) => ( 
        <Box
          key={index}
          display={"flex"}
          alignItems={"center"}
          marginBottom={"20px"}
        >
          <Checkbox
            marginRight={"20px"}
            isChecked={checkboxStates[index]}
            onChange={() => listCheckboxChange(index)}
          />
            //1-5) isChecked 상태값으로 useState에 저장해놓은 체크박스 상태를 전달한다.
            //1-6) onChange 이벤트가 발생할 때 listCheckboxChange 함수가 실행되도록 한다.

          <Text fontWeight={700}>{item}</Text>
          <PiDotsSixVerticalBold
            fontSize={"20px"}
            style={{ marginInlineStart: "auto" }}
          />
        </Box>
      ))}
      //1-2) 배열을 map 함수를 이용해서 만들어준다.
      
    </Card>
  );
};

export default Task;
```
</details>
