import React, { FC, useState, useEffect } from "react";
import { SpreadSheetCell } from "../../app/spreadSheetSlice";
import { useAppDispatch } from "../../app/hooks";

interface CellProps {
  value: SpreadSheetCell;
  rowIndex: number;
  colIndex: number;
}

const Cell: FC<CellProps> = ({ value, rowIndex, colIndex }) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(value?.toString());

  useEffect(() => {
    setInputValue(value?.toString());
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onBlur = () => {
    dispatch({
      type: "spreadSheet/updateCell",
      payload: {
        row: rowIndex,
        col: colIndex,
        value: inputValue,
      },
    });
  };
  return (
    <td>
      <div style={{ width: "100%", height: "100%" }}>
        <input
          style={{ width: "100%", height: "100%" }}
          value={inputValue}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </td>
  );
};

export default Cell;
