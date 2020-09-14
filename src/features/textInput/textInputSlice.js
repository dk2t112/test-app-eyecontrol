import { createSlice } from '@reduxjs/toolkit';

export const textInputSlice = createSlice({
  name: 'textInput',
  initialState: {
    text: "",
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setText } = textInputSlice.actions;
export const selectText = state => state.textInput.text;

export default textInputSlice.reducer;
