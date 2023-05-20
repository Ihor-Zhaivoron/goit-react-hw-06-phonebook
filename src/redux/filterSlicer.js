import { createSlice } from '@reduxjs/toolkit';

export const filterSlicer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(action, state) {
      return action.payload;
    },
    clearFilter(action, state) {
      return '';
    },
  },
});
