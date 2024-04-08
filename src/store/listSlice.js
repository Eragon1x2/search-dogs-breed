import { createSlice } from "@reduxjs/toolkit";
import { fetchDogs, fetchDogsbyBreed } from "./listActions";

const initialState = {
    list: null,
    error: null,
    loading: false
}
export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchDogs.pending,(state, action) => {
            state.loading = true;
        }),
        builder.addCase(fetchDogs.fulfilled,(state, action) => {
            state.list = action.payload;
            state.error = null;
            state.loading = false;
        }),
        builder.addCase(fetchDogs.rejected,(state,action) => {
            console.log(action)
            state.error = action.error.message;
            state.loading = false;
        }),
        builder.addCase(fetchDogsbyBreed.pending,(state,action)=> {
            state.loading = true;
        }),
        builder.addCase(fetchDogsbyBreed.fulfilled,(state,action) => {
            state.list = action.payload;
            state.error = null;
            state.loading = false;
        }),
        builder.addCase(fetchDogsbyBreed.rejected,(state,action) => {
            state.error = action.error.message;
            state.loading = false;
        })
    }
})


export default listSlice.reducer