import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducer/counterreducer";
import todosReducer from "../reducer/todosReducer";

const combinedStore = configureStore({
    reducer:{
        counterReducer: counterReducer,
        todosReducer:todosReducer
    }
});

export default combinedStore;