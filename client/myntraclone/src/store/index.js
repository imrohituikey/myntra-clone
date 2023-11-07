import {configureStore} from '@reduxjs/toolkit';
import itemSlice from '../store/itemSlice';
import bagSlice from '../store/bagSlice';


export const myntraStore = configureStore({
    reducer : {
        items : itemSlice.reducer,
        bag : bagSlice.reducer,
    }
})
export default myntraStore;