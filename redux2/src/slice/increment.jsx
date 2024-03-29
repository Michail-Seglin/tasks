import { createSlice } from '@reduxjs/toolkit';

const increment = createSlice({
    name: 'increment',
    initialState: 0,
    reducers: {
        countPlus: function (state) {
            return state + 1
        }
    }
})

export const { countPlus } = increment.actions;
export default increment.reducer;