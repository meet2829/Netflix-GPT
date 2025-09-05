import { createSlice } from "@reduxjs/toolkit";

const GPTslice= createSlice({
    name:'GPT',
    initialState:{
        ShowGptSearch:false,
    },
    reducers:{
        ToggleGptSearchView:(state,action)=>{
            state.ShowGptSearch=!state.ShowGptSearch
        },
    },
});

export const {ToggleGptSearchView}=GPTslice.actions

export default GPTslice.reducer