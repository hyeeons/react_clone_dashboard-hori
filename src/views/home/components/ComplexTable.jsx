import {
  Card,
  CardHeader,
  Checkbox,
  Table,
  Td,
  useTab,
} from "@chakra-ui/react";
import React from "react";
import { tableDataComplex } from "../../../variables/tables";
import { useSortBy, useTable } from "react-table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
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
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th>
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
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr>
                {row.cells.map((cell) => {
                  return <td>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default ComplexTable;
