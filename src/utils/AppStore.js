import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; 
import moviesReducer from "./MovieSlice";
import gptReducer from "./GPTslice";

const appStore=configureStore({
    reducer:{
        user: userReducer,
        movies:moviesReducer,
        GPT:gptReducer
    },
})
export default appStore;