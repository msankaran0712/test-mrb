import React from "react";

// Testing imports
import { ProgressBar } from "@trimbleinc/modus-react-bootstrap";
import DataTable from "@trimbleinc/modus-react-bootstrap/DataTable";
// Testing imports

import EditableCell from "./EditableCell";
import FilterPanel from "./FilterPanel";
import ModusReactTableInfo from "./Info";
import { DataType, MakeData } from "./MakeData";
import TableRowsCountInput from "./TableRowsCountInput";
import { SelectFilter, SliderFilter, TextFilter } from "./Filters";

import "../../../assets/DataTable.scss";
import {
  DataTableCellProps,
  DataTableColumn,
} from "@trimbleinc/modus-react-bootstrap/esm/types";

const ProfileProgress = ({ value }: DataTableCellProps<DataType>) => {
  const progress = parseFloat(value);
  let status = "danger";
  if (progress > 80) status = "success";
  else if (progress > 40) status = "warning";
  return (
    <div>
      <ProgressBar now={progress} variant={status} />
      <div className="text-left text-dark">
        <strong>Completed {progress} of 100.</strong>
      </div>
    </div>
  );
};
const ModusReactTable = () => {
  const [data, setData] = React.useState(() => MakeData(10000));

  const updateRowsCount = React.useCallback(
    (val: number) => {
      setData(MakeData(val));
    },
    [setData]
  );

  const updateData = React.useCallback(
    (rowIndex: number, columnId: string, value: any) => {
      setData((old) =>
        old.map((row, index) => {
          if (index === rowIndex) {
            return {
              ...old[rowIndex],
              [columnId]: value,
            };
          }
          return row;
        })
      );
    },
    [setData]
  );

  const Cell = React.useCallback(
    (props: DataTableCellProps<DataType>) => (
      <EditableCell {...props} updateData={updateData} />
    ),
    [updateData]
  );

  const columns = React.useMemo<DataTableColumn<DataType>[]>(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        sortBy: true,
        Filter: TextFilter,
        Cell,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        sortBy: true,
        Filter: TextFilter,
        Cell,
      },
      {
        Header: "Age",
        accessor: "age",
        Filter: SliderFilter,
        sortBy: true,
        allowDrag: true,
        allowDrop: true,
        Cell,
      },
      {
        Header: "Visits",
        accessor: "visits",
        sortBy: true,
        allowDrag: true,
        allowDrop: true,
        Cell,
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectFilter,
        sortBy: true,
        allowDrag: true,
        allowDrop: true,
        Cell,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        sortBy: true,
        Cell: ProfileProgress,
      },
    ],
    [Cell]
  );

  return (
    <div className="d-flex flex-column p-2">
      {ModusReactTableInfo}
      <TableRowsCountInput updateRowsCount={updateRowsCount} />
      <DataTable
        bordered
        checkBoxRowSelection
        columns={columns}
        data={data}
        hover
        filterPanel={FilterPanel}
        id="dt_sorting"
        multipleRowSelection
        pageSize={10}
        pageSizeOptions={[10, 25, 50]}
        resizeColumns={true}
        style={{ maxHeight: "800px" }}
      ></DataTable>
    </div>
  );
};

export default ModusReactTable;
