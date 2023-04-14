import React from "react";
import Row from "./Row";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const Table = () => {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();

  const spreadsheetData = useAppSelector((state) => state.spreadSheet.data);
  const dispatch = useAppDispatch();

  const onAddRow = () => {
    dispatch({
      type: "spreadSheet/addRow",
    });
  };

  const onAddCol = () => {
    dispatch({
      type: "spreadSheet/addColumn",
    });
  };

  return (
    <div>
      <button onClick={onAddRow}>Add Row</button>
      <button onClick={onAddCol}>Add Col</button>
      <table>
        <thead>
          <tr>
            <th>React</th>
            <th>Spreadsheet</th>
          </tr>
        </thead>
        <tbody>
          {spreadsheetData.map((rowData, index) => (
            <Row key={index} rowIndex={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
