import React, { FC } from "react";
import Cell from "./Cell";
import { SpreadSheetCell } from "../../app/spreadSheetSlice";

interface RowProps {
  rowIndex: number;
  rowData: SpreadSheetCell[];
}

const Row: FC<RowProps> = ({ rowData, rowIndex }) => {
  return (
    <tr>
      {rowData.map((cellValue, index) => (
        <Cell
          key={index}
          rowIndex={rowIndex}
          colIndex={index}
          value={cellValue}
        />
      ))}
    </tr>
  );
};

export default Row;
