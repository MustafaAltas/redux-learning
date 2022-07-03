import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducer/counterreducer";

const combinedStore = configureStore({
    reducer:{
        counterReducer: counterReducer,
    }
});

export default combinedStore;