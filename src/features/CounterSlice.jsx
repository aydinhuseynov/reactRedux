import { createSlice } from "@reduxjs/toolkit";

const innitialState = {
    count:0,
}

export const CounterSlice = createSlice({
    name: 'counter',
    innitialState,
    reducers:{
        increment: (state) => {state.count += 1},
        decrement: (state) => {state.count -=1},
        incrementByPayload: (state,action) => {state.count +=action.payload} 

    }
})
export const {increment,decrement,incrementByPayload} = CounterSlice.actions;
export default CounterSlice.reducer;