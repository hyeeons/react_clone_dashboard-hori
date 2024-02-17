import React from "react";
import { useTable, useSortBy } from "react-table";
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { tableDataCheck } from "../../../variables/tables";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const CheckTable = () => {
  // tableDataCheck 배열
  // useMemo를 사용하여 데이터를 캐싱
  // useMemo를 사용하지 않으면 렌더링 될 때마다 데이터가 새로 생성되어 렌더링 성능에 영향을 줄 수 있음
  const data = React.useMemo(() => tableDataCheck, []);

  // 컬럼 정의
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "checked",
        disableSortBy: true, // 체크박스 열은 정렬 비활성화
        Cell: ({ value }) => <Checkbox isChecked={value} />,
      },
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "PROGRESS",
        accessor: "progress",
      },
      {
        Header: "QUANTITY",
        accessor: "quantity",
      },
      {
        Header: "DATE",
        accessor: "date",
      },
    ],
    []
  );

  // useTable 훅을 사용하여 테이블 인스턴스 생성
  // useSortBy 훅을 사용하여 정렬 기능 추가
  const tableInstance = useTable({ columns, data }, useSortBy);

  // 테이블 인스턴스에서 필요한 속성 추출
  // getTableProps: 테이블 요소에 필요한 props
  // getTableBodyProps: 테이블 바디 요소에 필요한 props
  // headerGroups: 헤더 그룹에 대한 정보
  // rows: 테이블 데이터
  // prepareRow: 행에 필요한 props
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Card>
      <CardHeader>Check Table</CardHeader>
      <TableContainer>
        <Table variant="simple" {...getTableProps()}>
          <Thead>
            {/* 헤더 그룹 렌더링 */}
            {headerGroups.map((headerGroup) => (
              // 헤더 그룹에 필요한 props
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      {column.render("Header")}
                      {/* 정렬 방향 표시 */}
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
          <Tbody {...getTableBodyProps()}>
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
                        {cell.render("Cell")}
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

export default CheckTable;
