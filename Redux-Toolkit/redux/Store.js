import { configureStore } from "@reduxjs/toolkit";
import Slice from './Slice'; 

const Store = configureStore({
    reducer: {
        counter: Slice.reducer,
    },
});

export default Store;
