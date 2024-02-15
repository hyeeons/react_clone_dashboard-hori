import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { tableDataCheck } from "../../../variables/tables";

const CheckTable = () => {
  return (
    <Card padding={"20px 0"} h={407}>
      <TableContainer>
        <Text fontSize={"18px"} padding={"18px"}>
          Check Table
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>PROGRESS</Th>
              <Th>QUANTITY</Th>
              <Th>DATE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableDataCheck.map((row, index) => (
              <Tr key={index}>
                <Td>
                  <Checkbox isChecked={row.checked}>{row.name}</Checkbox>
                </Td>
                <Td>{row.progress}</Td>
                <Td>{row.quantity}</Td>
                <Td>{row.data}</Td>
              </Tr>
            ))}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CheckTable;
