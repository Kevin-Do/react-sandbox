import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SpreadSheetCell = string | number | boolean | null;

interface SpreadSheetState {
  data: SpreadSheetCell[][];
}

const initialState: SpreadSheetState = {
  data: [
    ["John", 20, 2000],
    ["Mary", 24, 2000],
    ["Peter", 18, 2000],
    ["Susan", 31, 2000],
    ["Kim", 17, 2000],
  ],
};

const spreadSheetSlice = createSlice({
  name: "spreadSheet",
  initialState,
  reducers: {
    updateCell: (
      state,
      action: PayloadAction<{
        row: number;
        col: number;
        value: SpreadSheetCell;
      }>
    ) => {
      const { row, col, value } = action.payload;
      state.data[row][col] = value;
    },
    addColumn: (state) => {
      state.data.forEach((row) => row.push(""));
      console.log(state.data);
    },
    addRow: (state) => {
      state.data.push(new Array(state.data[0].length).fill(""));
    },
  },
});

export const { updateCell } = spreadSheetSlice.actions;
export default spreadSheetSlice.reducer;
