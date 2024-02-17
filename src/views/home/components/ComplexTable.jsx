import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useTab,
} from "@chakra-ui/react";
import React from "react";
import { tableDataComplex } from "../../../variables/tables";
import { useSortBy, useTable } from "react-table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { cellIcon } from "../../../theme/components/table";

const ComplexTable = () => {
  const data = React.useMemo(() => tableDataComplex, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "NAME",
        accessor: "name",
      },
      { Header: "STATUS", accessor: "status" },
      { Header: "DATE", accessor: "date" },
      { Header: "PROGRESS", accessor: "progress" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <Card>
      <CardHeader>Complex Table</CardHeader>
      <TableContainer>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroups) => (
              <Tr {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <Box display={"flex"} alignItems={"center"}>
                      {column.render("Header")}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaAngleDown />
                        ) : (
                          <FaAngleUp />
                        )
                      ) : (
                        ""
                      )}
                    </Box>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        isNumeric={cell.column.isNumeric}
                      >
                        <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                          {cellIcon(cell.value)}
                          {cell.column.id === "progress" ? (
                            <Progress value={parseInt(cell.value)} />
                          ) : (
                            cell.render("Cell")
                          )}
                        </Box>
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default ComplexTable;
