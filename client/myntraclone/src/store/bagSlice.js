import {createSlice} from '@reduxjs/toolkit';

const bagSlice = createSlice({
    name : 'bag',
    initialState : [],
    reducers : {
        addToBag : (state, action) => {            
            const tempobj = Object.assign({quantity: 1},action.payload)
            state.push(tempobj)
        },
        removeFromBag: (state, action) => {
           return state.filter(itemId => itemId.id !== action.payload.id);
        },
    }
});
export const bagActions = bagSlice.actions;
export default bagSlice;