import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('devconnect-cards')) || []
};

const cardsSlice = createSlice ({
    name :"cards",
    initialState,

    reducers:{
        addCard: (state,action) => {
            state.items.push(action.payload);
            localStorage.setItem('devconnect-cards', JSON.stringify(state.items));
        }
    }
})

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;